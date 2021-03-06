# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] 2017-06-26

### Added
- New tracking events: Clicked Buy Button, Saw Notice Popup, Purchased Product
- The '/course' route now allow users to chose a Season
- SeasonItems, with description, price, estimated study time
- Add breadcrumbs to navigate: Home > Course > Season X > Episode X
- Comments on articles via Disqus 
- Possibility to pre-order seasons that are not yet available
- Placeholders for upcoming episodes

### Changed
- Do not hide episode images when locked (used to be locker icon)
- New routes: '/course/season/X'

### Fixed
- Fixed regression that broke the scrollToPosition feature in Book 

## [0.2.2] 2017-06-04

### Added
- chinese-grammar landing page

## [0.2.1] 2017-06-04

### Added
- Smooth scrolling on mobile
- Handle SEO Meta tags with React-helmet
- Pre-render pages for crawlers with prerender.io

### Changed
- Do not display TOC on mobile
- Return a 404 to crawlers for not found page

## [0.2] 2017-05-24

### Added
- Blog
- NLSignupForm

### Changed
- App now available under www.chinese-me.com URL (removed app.chinese-me.com)
- Hompeage is now integrated to the client
- Navbar shows links to Blog and Course
- /study route renamed into /course
- PDF 1.1

## [0.1.27] 2017-05-17

### Added
- Docs for How to print PDF

### Changed
- PDF v1.0
- EpisodeCards display illustrations from the episodes

### Fixed
- Update formatting for printing

### Content
- Add Pronunciation B in S1E7

## [0.1.26] 2017-05-16

### Added
- Error report (in production only) with Sentry

### Changed
- increase size of image captions
- hanziData loaded from our server
- move rendering logic from Practice container to component

### Fixed
- weird progressbar behavior when starting practice

## [0.1.251] 2017-05-07

### Added
- Free coupon system

### Fixed
- Cleaner log out

## [0.1.25] 2017-04-30

### Added
- 404 page
- Next episode button

### Changed
- Removed clock in Exam

### Fixed
- Fix characterPinyin UI in Exam

## [0.1.241] 2017-04-27

### Added
- Embeded NL signup form on About page

### Changed
- Update content on About page

### Fixed
- Broken link to Episode 1 in help page
- Missing link to contact us on MailSent

## [0.1.24] 2017-04-26

### Added
- Separate "Me" screens to collect user informations.
- Practice after every "Me" icon.
- Possibility to add user variables in toSpeech exercises

### Changed
- Removed user variables from the book (except dialogs)

### Content
- All guideline texts going with "Me" or "Exercise" icons are now in italic

### Fixed
- Bug with audio when hiting spacebar instead of clicking the PlayAudioButton.

## [0.1.23] 2017-04-10

### Added
- Store with Stripe payment
- Locked episodes above number 3 if the season is not purchased by the user

### Content
- Moved some calligraphy and oracle bone content into screens
- Added explanations about icons in the text
- Added one stroke order image with arrows
- Removed empty character boxes

### Fixed
- Character screens crashing the app on reload page

## [0.1.22] 2017-03-23

### Changed
- Load all assets from Cloudfront URL

## [0.1.21] 2017-03-16

### Added
- Responsiveness

### Content
- Made Lesson 1 more digest

### Changed
- Browser notice only displayed once
- Answers in freeInput ignore punctuation and spaces

### Fixed

## [0.1.2] 2017-12-21

### Changed
- Reduced the volume of success / fail sounds

### Fixed
- Clicking on sound buttons now works every time
- [cross-browser]: Fixed display of screen buttons on Safari
- [cross-browser]: Fixed stroke order animation on Safari

## [0.1.1] 2017-12-11

### Added
- Logout

### Fixed
- EpisodeCards should mention "Lesson" instead of "Episode" in season 0.


## [0.1] 2017-12-05

### Added
- Auto-capitalize user's family and given names before saving them in our DB.
- Links in TOC (using react-sroll)
- Kind success messages at the end of exercises

### Content
- S0E3: Separate sound buttons for 姓 and 叫
- S0E3: "I am Chinese" should be in italic
- S0E2: Dialogs should mention the user's full name instead of given name only.
- S0E2: "Example dialogs" now only have an audio button.

### Changed
- Dialogs start with "Explore" when opened (previously "Listen").
- Rename "Exit" into "Back" in interactive windows.
- Remove Practices from the TOC.
- Rename "Listen" into "Watch" in dialogs.
- Do not track changes for dialog, characters.
- Updated guidelines text in ChoseRole.
- Stroke order exercise in Review say "Write the character" instead of "Your turn!".

### Fixed
- Robotic voice no longer pronounce the underscore symbols.
