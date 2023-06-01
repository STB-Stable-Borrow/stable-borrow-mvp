// // SPDX-License-Identifier: MIT
// pragma solidity >=0.5.11 < 0.9.0;

// import {IStbOracle} from "./StbOracle.sol";
// import {ISTC} from "./Stc.sol";

// contract StableSwap {
//     address private _owner;

//     address private _oracleContract;

//     address public xdcTokenContract;

//     address [] public listedTokens;

//     mapping (address => string) private _tokenSymbols;

//     uint256 public maxFee;

//     uint256 public stbSwapPerc;

//     struct Pool{
//         uint256 poolId;
//         address poolOwner;
//         uint256 totalFee;
//         address token1;
//         address token2;
//         uint256 token1Liq;
//         uint256 token2Liq;
//         uint256 token1Vol;
//         uint256 token2Vol;
//         uint256 totalToken1Share;
//         uint256 totalToken2Share;
//     }

//     Pool [] public pools;

//     mapping(uint256 => mapping(address => uint256 [])) private _sharesPerPool;

//     mapping(uint256 => mapping(address => uint256 [])) private _profitPerPool;

//     mapping(uint256 => address []) private _liquidityProvs;

//     mapping (address => bool) private _isAuthorized;


//     constructor(address stcContract, address _xdctokenContract, string memory stcSymbol, address oracleContract, uint256 _maxFee, uint8 stbPerc) {
//         maxFee = _maxFee;
//         stbSwapPerc = stbPerc;
//         listedTokens.push(stcContract);
//         _tokenSymbols[stcContract] = stcSymbol;
//         _owner = msg.sender;
//         xdcTokenContract = _xdctokenContract;
//         _oracleContract = oracleContract;
//     }

//     modifier validatePool(uint256 poolId) {
//         require(poolId > 0 && poolId <= pools.length, "STB-SWAP_ERR7: Pool does not exist");
//         _;
//     }

// //verify payment
//     function _createPool (uint256 id, address token1, address token2, uint8 fee, uint256 liq1, uint256 liq2, uint256 vol1, uint256 vol2) internal {
//         pools.push(Pool(id, msg.sender, fee, token1, token2, liq1, liq2, vol1, vol2, 1000000000000000000, 1000000000000000000));
//     }

//     function getPool(uint256 poolId) external view returns(Pool memory) {
//         return pools[poolId - 1];
//     }

//     function _getPrice(address token1, address token2) internal returns(uint256) {
//         bytes32 id;
//         IStbOracle oracle = IStbOracle(_oracleContract);
//         if(keccak256(abi.encodePacked(_tokenSymbols[token1])) == keccak256(abi.encodePacked("STC")) ||
//             keccak256(abi.encodePacked(_tokenSymbols[token2])) == keccak256(abi.encodePacked("STC")) ) {
//             if(keccak256(abi.encodePacked(_tokenSymbols[token1])) == keccak256(abi.encodePacked("STC"))) {
//                 id = oracle.getPriceInfo("USDT", _tokenSymbols[token2]);
//             }else{
//                 id = oracle.getPriceInfo(_tokenSymbols[token1], "USDT");
//             }
//         }else{
//             id = oracle.getPriceInfo(_tokenSymbols[token1], _tokenSymbols[token2]);
//         }
//         return oracle.show(id);
//     }

//     function getSharePerc(uint256 share, uint256 totalShare) external pure returns(uint256) {
//         return (100 * share) / totalShare;
//     }

//     function createPool (address token1, address token2, uint256 token1Amt, uint256 token2Amt, uint8 fee) external payable returns(bool) {
//         if(keccak256(abi.encodePacked(_tokenSymbols[token1])) == keccak256(abi.encodePacked("XDC"))) {
//             require(msg.value == token1Amt, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//             ISTC token2Contract = ISTC(token2);
//             token2Contract.transferFrom(msg.sender, address(this), token2Amt);
//         }else {
//             if(keccak256(abi.encodePacked(_tokenSymbols[token2])) == keccak256(abi.encodePacked("XDC"))) {
//                 require(msg.value == token2Amt, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//             }else{
//                 require(msg.value == 0, "STB-SWAP_ERR2: attached deposit must be zero");
//                 ISTC token2Contract = ISTC(token2);
//                 token2Contract.transferFrom(msg.sender, address(this), token2Amt);
//             }
//             ISTC token1Contract = ISTC(token1);
//             token1Contract.transferFrom(msg.sender, address(this), token1Amt);
//         }
//         uint256 id = pools.length + 1;
//         _createPool(id, token1, token2, fee, token1Amt, token2Amt, token1Amt, token2Amt);
//         _liquidityProvs[id] = [msg.sender];
//         _profitPerPool[id][msg.sender] = [1000000000000000000, 1000000000000000000];
//         _sharesPerPool[id][msg.sender] = [token1Amt, token2Amt];
//         return true;
//     }
    

//     function tokenPriceFromPool(uint256 poolId, address tokenId) public view returns(uint256) {
//         Pool memory pool = pools[poolId - 1];
//         if(pool.token1 == tokenId) {
//             uint256 token2Liq;
//             token2Liq = pool.token2Liq;
//             return token2Liq / pool.token1Liq;
//         }else{
//             if(pool.token2 == tokenId) {
//                 uint256 token2Liq = pool.token1Liq;
//                uint256 token1Liq = pool.token2Liq;
//                return token2Liq / token1Liq;
//             }else{
//                 revert("STB-SWAP_ERR3: token passed does not exist in pool");
//             }
//         }
//     }

//     function isAProvider(uint256 poolId, address account) public view returns(bool) {
//         bool isNew = true;
//         for(uint i = 0; i < _liquidityProvs[poolId].length; i++) {
//             if(_liquidityProvs[poolId][i] == account) {
//                 isNew = false;
//             }
//         }
//         return isNew;
//     }

//     function _handleShareAndProfit(uint256 poolId, uint256 token1Liq, uint256 token2Liq, uint256 totalToken1Share, uint256 totalToken2Share,uint256 token1Amt, uint256 token2Amt) internal {
//         uint256 [] memory prevShares =  _sharesPerPool[poolId][msg.sender];
//         _sharesPerPool[poolId][msg.sender] = [prevShares[0] + token1Amt, prevShares[1] + token2Amt];
//         uint256 [] memory prevProfit = _profitPerPool[poolId][msg.sender];
//         uint256 token1Profit = token1Amt * (totalToken1Share / token1Liq);
//         uint256 token2Profit = token2Amt * (totalToken2Share / token2Liq);
//         _profitPerPool[poolId][msg.sender] =  [prevProfit[0] + token1Profit, prevProfit[1] + token2Profit];
//     }

//     function addLiquidity(uint256 poolId, uint256 token1Amt, uint256 token2Amt, uint256 maxTol) external payable validatePool(poolId) returns(bool) {
//         Pool memory pool = pools[poolId - 1];
//          if(keccak256(abi.encodePacked(_tokenSymbols[pool.token1])) == keccak256(abi.encodePacked("XDC"))) {
//             require(msg.value == token1Amt, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//             uint256 token1Price = tokenPriceFromPool(poolId, pool.token1);
//             uint256 _token2Amt = token1Price * token1Amt;
//             require(_token2Amt <= maxTol, "STB_-SWAP_ERR3: token amount due to pool is greater than max amount set from slippage");
//             ISTC token2Contract = ISTC(pool.token2);
//             token2Contract.transferFrom(msg.sender, address(this), _token2Amt);
//             pools[poolId - 1].token1Liq = pool.token1Liq + token1Amt;
//             pools[poolId - 1].token2Liq = pool.token2Liq +_token2Amt;
//             pools[poolId - 1].token1Vol = pool.token1Vol + token1Amt;
//             pools[poolId - 1].token2Vol = pool.token2Vol +_token2Amt;
//             bool isNew = isAProvider(poolId, msg.sender);
//             if(isNew) {
//                 _liquidityProvs[poolId].push(msg.sender);
//             } 
//             _handleShareAndProfit(poolId, pool.token1Liq, pool.token2Liq, pool.totalToken1Share, pool.totalToken2Share, token1Amt, _token2Amt);
//         }else {
//             if(keccak256(abi.encodePacked(_tokenSymbols[pool.token2])) == keccak256(abi.encodePacked("XDC"))) {
//                 require(msg.value == token2Amt, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//                 uint256 token2Price = tokenPriceFromPool(poolId, pool.token2);
//                 uint256 _token1Amt = token2Price * token2Amt;
//                 require(_token1Amt <= maxTol, "STB_-SWAP_ERR3: token amount due to pool is greater than max amount set from slippage");
//                 ISTC token1Contract = ISTC(pool.token1);
//                 token1Contract.transferFrom(msg.sender, address(this), _token1Amt);
//                 pools[poolId - 1].token1Liq = pool.token1Liq + _token1Amt;
//                 pools[poolId - 1].token2Liq = pool.token2Liq + token2Amt;
//                 pools[poolId - 1].token1Vol = pool.token1Vol + _token1Amt;
//                 pools[poolId - 1].token2Vol = pool.token2Vol + token2Amt;
//                 bool isNew = isAProvider(poolId, msg.sender);
//                 if(isNew) {
//                     _liquidityProvs[poolId].push(msg.sender);
//                 } 
//                 _handleShareAndProfit(poolId, pool.token1Liq, pool.token2Liq, pool.totalToken1Share, pool.totalToken2Share, _token1Amt, token2Amt);
//             }else{
//                 require(msg.value == 0, "STB-SWAP_ERR2: attached deposit must be zero");
//                  uint256 token1Price = tokenPriceFromPool(poolId, pool.token1);
//                 uint256 _token2Amt = token1Price * token1Amt;
//                 require(_token2Amt <= maxTol, "STB_-SWAP_ERR3: token amount due to pool is greater than max amount set from slippage");
//                 ISTC token1Contract = ISTC(pool.token1);
//                 token1Contract.transferFrom(msg.sender, address(this), token1Amt);
//                 ISTC token2Contract = ISTC(pool.token2);
//                 token2Contract.transferFrom(msg.sender, address(this), _token2Amt);
//                 pools[poolId - 1].token1Liq = pool.token1Liq + token1Amt;
//                 pools[poolId - 1].token2Liq = pool.token2Liq +_token2Amt;
//                 pools[poolId - 1].token1Vol = pool.token1Vol + token1Amt;
//                 pools[poolId - 1].token2Vol = pool.token2Vol +_token2Amt;
//                 bool isNew = isAProvider(poolId, msg.sender);
//                 if(isNew) {
//                     _liquidityProvs[poolId].push(msg.sender);
//                 } 
//                 _handleShareAndProfit(poolId, pool.token1Liq, pool.token2Liq, pool.totalToken1Share, pool.totalToken2Share, token1Amt, _token2Amt);
//             }
//         }
//         return true;
//     }

//     function shareAmountOut(uint256 poolId, address token, uint256 amount) public view returns(uint256) {
//         Pool memory pool = pools[poolId - 1];
//         address _token;
//         uint256 tokenTotalLiq;
//         uint totalTokenProf;
//         if(pool.token1 == token || pool.token2 == token) {
//             if(pool.token1 == token) {
//                 _token = pool.token1;
//                 tokenTotalLiq = pool.token1Liq;
//                 totalTokenProf = pool.totalToken1Share;
//             }else{
//                 _token = pool.token2;
//                 tokenTotalLiq = pool.token2Liq;
//                 totalTokenProf = pool.totalToken2Share;
//             }
//         }else{
//             revert("STB-SWAP_ERR3: token passed does not exist in pool");
//         }
//         if(tokenTotalLiq > 0) {
//             uint256 amoutProfitRt = amount / totalTokenProf;
//             return amoutProfitRt * tokenTotalLiq;
//         }else{
//             return amount;
//         }
        
//     }

//     function removeLiquidity(uint256 poolId, uint256 token1Amt, uint256 token2Amt, uint256 minTol1, uint256 minTol2) external validatePool(poolId) returns(bool) {
//         Pool memory pool = pools[poolId - 1];
//          if(keccak256(abi.encodePacked(_tokenSymbols[pool.token1])) == keccak256(abi.encodePacked("XDC"))) {
//             uint256 token1shareBal = _sharesPerPool[poolId][msg.sender][0];
//             uint256 token2shareBal = _sharesPerPool[poolId][msg.sender][1];
//             uint256 _token1ShareOut = shareAmountOut(poolId, pool.token1, token1Amt);
//             uint256 token2AmtOut = tokenPriceFromPool(poolId, pool.token1) * _token1ShareOut;
//             require(token2AmtOut >= minTol2, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             uint256 _token2ShareOut = shareAmountOut(poolId, pool.token2, token2Amt);
//             uint256 token1AmtOut = tokenPriceFromPool(poolId, pool.token2) * _token2ShareOut;
//             require(token1AmtOut >= minTol1, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             pools[poolId].token1Liq = pool.token1Liq - token1AmtOut;
//             pools[poolId].token2Liq = pool.token2Liq - token2AmtOut;
//             pools[poolId].totalToken2Share = pool.totalToken2Share - token2Amt;
//             _sharesPerPool[poolId][msg.sender] = [token1shareBal - token1Amt, token2shareBal - token2Amt];
//             address payable receiver = payable(msg.sender);
//             receiver.transfer(token1AmtOut);
//             ISTC token2Contract = ISTC(pool.token2);
//             token2Contract.transfer(msg.sender, token2AmtOut);
//         }else {
//             if(keccak256(abi.encodePacked(_tokenSymbols[pool.token2])) == keccak256(abi.encodePacked("XDC"))) {
//             uint256 token1shareBal = _sharesPerPool[poolId][msg.sender][0];
//             uint256 token2shareBal = _sharesPerPool[poolId][msg.sender][1];
//             uint256 _token1ShareOut = shareAmountOut(poolId, pool.token1, token1Amt);
//             uint256 token2AmtOut = tokenPriceFromPool(poolId, pool.token1) * _token1ShareOut;
//             require(token2AmtOut >= minTol2, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             uint256 _token2ShareOut = shareAmountOut(poolId, pool.token2, token2Amt);
//             uint256 token1AmtOut = tokenPriceFromPool(poolId, pool.token2) * _token2ShareOut;
//             require(token1AmtOut >= minTol1, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             pools[poolId].token1Liq = pool.token1Liq - token1AmtOut;
//             pools[poolId].token2Liq = pool.token2Liq - token2AmtOut;
//             pools[poolId].totalToken2Share = pool.totalToken2Share - token2Amt;
//             _sharesPerPool[poolId][msg.sender] = [token1shareBal - token1Amt, token2shareBal - token2Amt];
//             address payable receiver = payable(msg.sender);
//             receiver.transfer(token2AmtOut);
//             ISTC token1Contract = ISTC(pool.token1);
//             token1Contract.transfer(msg.sender, token1AmtOut);
//             }else{
//             uint256 token1shareBal = _sharesPerPool[poolId][msg.sender][0];
//             uint256 token2shareBal = _sharesPerPool[poolId][msg.sender][1];
//             uint256 _token1ShareOut = shareAmountOut(poolId, pool.token1, token1Amt);
//             uint256 token2AmtOut = tokenPriceFromPool(poolId, pool.token1) * _token1ShareOut;
//             require(token2AmtOut >= minTol2, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             uint256 _token2ShareOut = shareAmountOut(poolId, pool.token2, token2Amt);
//             uint256 token1AmtOut = tokenPriceFromPool(poolId, pool.token2) * _token2ShareOut;
//             require(token1AmtOut >= minTol1, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//             pools[poolId].token1Liq = pool.token1Liq - token1AmtOut;
//             pools[poolId].token2Liq = pool.token2Liq - token2AmtOut;
//             pools[poolId].totalToken2Share = pool.totalToken2Share - token2Amt;
//             _sharesPerPool[poolId][msg.sender] = [token1shareBal - token1Amt, token2shareBal - token2Amt];
//             ISTC token1Contract = ISTC(pool.token1);
//             token1Contract.transfer(msg.sender, token1AmtOut);
//             ISTC token2Contract = ISTC(pool.token2);
//             token2Contract.transfer(msg.sender, token2AmtOut);
//             }
//         }
//         return true;
//     }

//     function getShare(uint poolId, address account) public validatePool(poolId) returns(uint256 [] memory) {
//         return _sharesPerPool[poolId][account];
//     }

//     function _handleProvsProf(uint256 poolId, uint256 totalTokenShare, uint256 totalProvProfit, bool inOrder) internal {
//         for(uint i = 0; i < _liquidityProvs[poolId].length; i++) {
//             if(inOrder) {
//                 uint256 profit = totalProvProfit * (_sharesPerPool[poolId][_liquidityProvs[poolId][i]][0] / totalTokenShare);
//                 _profitPerPool[poolId][_liquidityProvs[poolId][i]][0] += profit;
//             }else{
//                 uint256 profit = totalProvProfit * (_sharesPerPool[poolId][_liquidityProvs[poolId][i]][1] / totalTokenShare);
//                  _profitPerPool[poolId][_liquidityProvs[poolId][i]][1] += profit;
//             }
             
//         }
//     }

//     function _swap(uint256 poolId, uint256 amount, address tokenFrom, address tokenTo, uint256 tokenFromLiq, uint256 tokenToliq, uint256 tokenFromVol, uint256 tokenToVol, uint256 tokenFromTotalShares, uint256 totalFee, uint256 minTol, bool inOrder) internal {
//         uint256 totalCharges = amount * (totalFee / 100);
//         uint256 amountAfterFee = amount - totalCharges;
//         uint256 const = tokenFromLiq * tokenToliq;
//         uint newLiq = const / (amountAfterFee + tokenFromLiq);
//         require(tokenToliq > newLiq, "STB-SWAP_ERR6: Insufficient Liquidity");
//         uint256 amountOut = tokenToliq - newLiq;
//         require(amountOut >= minTol, "STB-SWAP_ERR4: token amount due to pool is lesser than minimum amount from slippage");
//         if(inOrder) {
//             pools[poolId].token1Liq = tokenFromLiq + amountAfterFee;
//             pools[poolId].token2Liq = newLiq;
//             pools[poolId].token1Vol = tokenFromVol + amountAfterFee;
//             pools[poolId].token2Vol = tokenToVol + amountOut;
//             if(tokenFrom == xdcTokenContract) {
//             ISTC token2Contract = ISTC(tokenTo);
//             token2Contract.transfer(msg.sender, amountOut);
//             }else{
//             address payable receiver = payable(msg.sender);
//             receiver.transfer(amountOut); 
//             }
//         }else{
//             pools[poolId].token2Liq = tokenFromLiq + amountAfterFee;
//             pools[poolId].token1Liq = newLiq;
//             pools[poolId].token2Vol = tokenFromVol + amountAfterFee;
//             pools[poolId].token1Vol = tokenToVol + amountOut;
//             if(tokenFrom == xdcTokenContract){
//             ISTC token1Contract = ISTC(tokenTo);
//             token1Contract.transfer(msg.sender, amountOut);
//             }else{
//             address payable receiver = payable(msg.sender);
//             receiver.transfer(amountOut);
//             }
//         }
//         uint stbSwapProfit = (stbSwapPerc / 100) * totalCharges;
//         _profitPerPool[poolId][address(this)][0] += stbSwapProfit;
//         uint totalPrvsProfit = totalCharges - stbSwapProfit;
//         _handleProvsProf(poolId, tokenFromTotalShares, totalPrvsProfit, inOrder);
//     }

//     function swap(uint256 poolId, address tokenFrom, address tokenTo, uint256 amount, uint256 minTol) external payable validatePool(poolId) returns(bool) {
//         Pool memory pool = pools[poolId - 1];
//         require(pool.token1 == tokenFrom || pool.token2 == tokenFrom, "STB-SWAP_ERR5: Token passed does not exists in pool");
//         require(pool.token1 == tokenTo || pool.token2 == tokenTo, "STB-SWAP_ERR5: Token passed does not exists in pool");
//         if(pool.token1 == xdcTokenContract && tokenFrom == xdcTokenContract) {
//             require(msg.value == amount, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//             _swap(poolId, amount, xdcTokenContract, pool.token2, pool.token1Liq, pool.token2Liq, pool.token1Vol, pool.token2Vol,pool.totalToken1Share, pool.totalFee, minTol, true);
//         }

//         if(pool.token1 == xdcTokenContract && tokenTo == xdcTokenContract) {
//             ISTC token2Contract = ISTC(pool.token2);
//             token2Contract.transferFrom(msg.sender, address(this), amount);
//             _swap(poolId, amount, pool.token2, xdcTokenContract, pool.token2Liq, pool.token1Liq, pool.token2Vol, pool.token1Vol, pool.totalToken2Share, pool.totalFee, minTol, false);
//         }
    
//         if(pool.token1 != xdcTokenContract && tokenFrom == xdcTokenContract) {
//             require(msg.value == amount, "STB-SWAP_ERR1: attached deposit and XDC amount passed is not the same");
//             _swap(poolId, amount, xdcTokenContract, pool.token1, pool.token2Liq, pool.token1Liq, pool.token2Vol, pool.token1Vol, pool.totalToken2Share, pool.totalFee, minTol, false);
            
//         }

//         if(pool.token1 != xdcTokenContract && tokenTo == xdcTokenContract) {
//             ISTC token1Contract = ISTC(pool.token1);
//             token1Contract.transferFrom(msg.sender, address(this), amount);
//             _swap(poolId, amount, pool.token1, pool.token2, pool.token1Liq, pool.token2Liq, pool.token1Vol, pool.token2Vol, pool.totalToken1Share, pool.totalFee, minTol, true);
//         }
        
//         if(pool.token1 != xdcTokenContract && tokenFrom != xdcTokenContract) {
//             if(tokenFrom == pool.token1 ) {
//                 ISTC token1Contract = ISTC(pool.token1);
//                 token1Contract.transferFrom(msg.sender, address(this), amount);
//                 _swap(poolId, amount, pool.token1, pool.token2, pool.token1Liq, pool.token2Liq, pool.token1Vol, pool.token2Vol, pool.totalToken1Share, pool.totalFee, minTol, true);
//             }else{
//                 ISTC token2Contract = ISTC(pool.token2);
//                 token2Contract.transferFrom(msg.sender, address(this), amount);
//                 _swap(poolId, amount, pool.token2, pool.token1, pool.token2Liq, pool.token1Liq, pool.token2Vol, pool.token1Vol, pool.totalToken2Share, pool.totalFee, minTol, false);
//             }
//         }
//         return true;
//     }
   

// }