 const { buildModule }= require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) =>{
    const balanceOf =m.contract("SimpleToken");
    return {balanceOf};

});

