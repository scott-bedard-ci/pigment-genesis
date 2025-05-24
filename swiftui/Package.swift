// swift-tools-version: 5.9
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "PigmentGenesisUI",
    platforms: [
        .iOS(.v15),
        .macOS(.v12),
        .watchOS(.v8),
        .tvOS(.v15)
    ],
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "PigmentGenesisUI",
            targets: ["PigmentGenesisUI"]
        ),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // No external dependencies - design system should be self-contained
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        .target(
            name: "PigmentGenesisUI",
            dependencies: [],
            path: "Sources/PigmentGenesisUI",
            resources: [
                .process("Resources")
            ]
        ),
        .testTarget(
            name: "PigmentGenesisUITests",
            dependencies: ["PigmentGenesisUI"],
            path: "Tests/PigmentGenesisUITests"
        ),
    ]
)