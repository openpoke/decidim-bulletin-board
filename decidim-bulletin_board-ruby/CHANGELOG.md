# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2020-12-10

### Added

- `Decidim::BulletinBoard::Authority` namespace that includes commands and forms to get the status of an election.

### Changed

- `Decidim::BulletinBoard::Client` now includes a `get_status` method to get the election status using the `Authority` namespace.

### Fixed

- `Decidim::BulletinBoard::Voter::CastVote` command uses the `encrypted_vote` as a `String` and not as a `Hash`.

## [0.2.0] - 2020-12-08

### Added

- `Decidim::BulletinBoard::Voter` namespace that includes commands and forms to perform the cast vote action.

### Changed

- `Decidim::BulletinBoard::Client` now includes a `cast_vote` method to cast a vote using the `Voter` namespace.

## [0.1.0] - 2020-12-07

### Added

- `Decidim::BulletinBoard::Client` class totally configurable using `ActiveSupport::Configurable`
- The client now includes a `setup_election` method that creates the election in the bulletin board.

[unreleased]: https://github.com/decidim/decidim-bulletin-board/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/decidim/decidim-bulletin-board/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/decidim/decidim-bulletin-board/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/decidim/decidim-bulletin-board/releases/tag/v0.1.0