const { network, ethers } = require("hardhat")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { log, deploy } = deployments

    const chainId = network.config.chainId

    const args = []

    log("---------------------------")

    const box = await deploy("Box", {
        from: deployer,
        args: args,
        log: true,
        waitConformations: network.config.blockConformations || 1,
    })
    log("---------------------------")
}

module.exports.tags = ["all", "devToken"]
