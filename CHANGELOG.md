# Mayflower Release Notes

All notable changes to this project will be documented in this file.

See [Change Log Instructions](docs/for-developers/changelog-instructions.md) for directions on updating this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

```
<ticket/issue #>: Human-friendly description, with hyperlinked patterns (<Link to #PR>)
```

**For example**
- DP-1234: The short description text on a [service detail](http://mayflower.digital.mass.gov/?p=pages-detail-for-service-howto-location) page banner ([@organisms/by-template/page-banner](http://mayflower.digital.mass.gov/?p=organisms-page-banner)) should now render ([PR #493](https://github.com/massgov/mayflower/pull/493))

## 9.20.0 (08/14/2019)

### Added
- (Patternlab) [Link] DP-9274: Added `labelContext` variable for an optional visually-hidden suffix #683

### Changed
- (Patternlab) [ContactUs] DP-8937: Made contact groups inside accordions always stack vertically. #697
- (Patternlab) [PressListingAsGrid] DP-9274: Changed JSON to use the `link` component’s new `labelContext` variable in the style guide #683


## 9.19.0 (08/07/2019)

### Fixed
- (React) [InputTextFuzzy] DP-14478: check for event before persist #694
- (React) [Tabs] DP-14479: Patch Tabs molecule so scrollIntoView action only called if it exists. #693
- (PatternLab) [Print] DP-15523: Removes sticky TOC from print #692
- (PatternLab) [HeaderSearch] DP-6174: Removed search field clear button in IE #688
- (React) [ErrorMessage] Fix success message color #691


## 9.18.0 (07/24/2019)

### Added
- (Patternlab) [ContactRow] DP-15056: Added blocks around contact groups to allow overriding on a field-by-field basis. #684

### Removed
- (Patternlab) [Template] DP-13005: Remove unused/broken template from Mayflower #653

### Changed
- (Patternlab) [ImageLink] DP-9262: Add underline to `:hover` and `:focus` states of image links #678

### Security Updates
- (React) [Security] Bump `lodash-es` from 4.17.11 to 4.17.14 #668
- (React) [Security] Bump `extend` from 3.0.1 to 3.0.2 #580


## 9.17.0 (07/17/2019)

### Added
- (Patternlab) [PageHeader] DP-13965: MF Change title and H1 on news overflow pages #646

### Removed
- (Patternlab) [Guide Page, Binder Page] DP-9211: Remove the text alternative for the banner image in Guide and Binder pages #162

### Changed
- (Patternlab) [How-To Page] DP-11891: Fixed How-to pages printer style being incorrectly indented. #654
- (Patternlab) [ActionFinder] DP-14173: Add a block for overriding link list loop. #661
- (Patternlab) [SplitColumns] DP-14173: Add a block for overriding columns. #661

## 9.16.0 (07/10/2019)

### Added
- (React) [circleCI] DP-14731: Add eslint to mayflower react circle test. #664

### Changed
- (React) [Header] DP-14439: Adds support for headerSearch prop to optionally be a function. #627
- (React) [Header] DP-14439: Ports code from Budget sites that fixes bugs related to missing classList functionality and browsers. #627
- (React) [Header] DP-14439: Allow Header SiteLogo to be overwritten by render prop. #665
- (React) [MainNav] DP-12214: Updates markup to better handle keyboard/focus events. Also updates roles for a11y functionality. #627
- (Patternlab, React) [EmergencyAlerts] DP-14741: Allow EmergencyAlerts to render everywhere not just right below header, specify mobile top positioning with `.ma__ajax-pattern` wrapper and fix z-index to not overlay main nav dropdown.  #662

### Fixed
- (React) [All Organisms] DP-14717: Fixes all lint errors/warnings on organisms in React. #656
  - Specific organisms impacted [AccordionWrapper, CalloutAlert, EmergencyAlerts, ErrorPage, FeedbackForm, FilterBox, Footer, FooterSlim, GeneralTeaser, Header, HeaderSlim, HelpTip, IllustratedHeader, LinkList, PageFlipper, PageHeader, PressFilters, RichText, SearchBanner, TabContainer, TableofContents, Teaser, TeaserListing, UtilityNav, UtilityPanel]

- (React) [All Molecules] DP-14720: Fixes all lint errors/warnings on molecules in React. #656
  - Specific molecules impacted [ContactGroup, EmergencyAlert, EmergencyHeader, FooterLinks, InputRadioGroup, Link, ListingTable, MainNav, OrgSelector, Pagination, ResultsHeading, SocialLinks, TypeAheadDropdown]

- (React) [All Atoms, DataViz] DP-14730: Fixes all lint errors/warnings on atoms and dataviz components in React. #657
  - Specific atoms impacted [CompoundSlider, Form, Input, InputCheckbox, InputCurrency, InputNumber, InputSlider, InputText, InputTextFuzzy, InputTextTypeAhead, Footnote, OrderedList, UnorderedList, Paragrag]
  - Specific dataviz impacted [DataTable]

## 9.15.0 (07/03/2019)

### Added
- (Docs) [patternlab/docs] DP-13704: Add accessibility checklist for markup. #558
- (Docs) DP-14372: Adds masscultural council to list of sites we search. #658

### Changed
- (Patternlab) [Utility Navigation] DP-13939: Add second panel to utility nav for contextual login links and vanilla js functionality. #639
- (Patternlab) [Stacked Row Section] DP-14175: Update styles and templates for the Stacked Row Section to resolve inconsistent applications of padding and spacing in parent templates. #630
- (React) [All] DP-14436: Upgrades storybook to version 5.1.8. #640
- (React) [ImagePromo] DP-14436: Fixes bug with storybook story caused by repeatedly called knobs. #640

## 9.14.0 (06/27/2019)

### Fixed
- (Patternlab) [location-banner] DP-12216: Update banner image scss to avoid background repeating. #634

### Changed
- (React) [Link, DecorativeLink] DP-12128: Remove unused default class. #645
- (React) [TabContainer] DP-14424: Got rid of the need to track Tab children in state. Refactored TabContainer organism to use React Portals for rendering its children. #637
- (React) [Tab] DP-14424: Added TabBody component for rendering Tab children directly into TabContainer organism. Removed unused default prop. Converted component to be a class from a function and removed the need for React.forwardRef. #637

## 9.13.0 (06/26/2019)

### Added
- (Patternlab) [Sticky TOC] DP-13864: Moved arrow icon into the a tag to make clickable within the stickyTOC.js file, styled accordingly in the `_sticky-toc.scss` file #619
- (Patternlab) [SuggestedPages] DP-13951: Add option for link list instead of more link to suggested pages. #562
- (Patternlab) [ServicesFlexibleLinkGroups] DP-14173: Service page redesign with grouped links #625

## 9.12.0 (06/19/2019)

### Added
- (React) [InputCurrency] DP-14078: Pass input id and event type to InputCurrency onBlur callback #629
- (React) [ButtonAlert] DP-14335: Created ButtonAlert component in Storybook to match button-alert molecule in PatternLab. #622
- (React) [EmergencyHeader] DP-14339: Adds the EmergencyHeader component. #626
- (React) [EmergencyAlert] DP-14340: Adds the EmergencyAlert molecule from pattern lab. #621
- (React) [Link] DP-14340: Adds support for using props.children with Link. #621
- (React) [Link] DP-14340: Adds support for passing custom classes to Link component. #621
- (React) [Link] DP-14340: Sets default text to empty string. #621
- (React) [EmergencyAlerts] DP-14341: Added EmergencyAlerts organism. #631

### Changed
- (React, PatternLab) [EmergencyAlerts, EmergencyAlert] DP-14341: Updated the emergency alerts organism scss and the emergency alert molecule scss to use tint instead of lighten for background colour. #631

## 9.11.1 (06/07/2019)

### Fixed
- (React) [TabContext] hotfix: Fixes export of TabContext in react package build. #616

## 9.11.0 (06/07/2019)

### Added
- (React) [InputTextFuzzy] DP-13800: Adds prop onKeyDownPreventDefault. When set to true, hitting enter without a valid suggestion will trigger event.preventDefault(). #566
- (React) [TabContext]: Adds TabContainers/Tabs context to expost as TabContext so accessible to external consumers. #608

### Fixed
- (React) [InputDate] DP-14234: Fixes a bug where the numeric date would be hidden if the current date was today and the date was selected. #613

## 9.10.0 (06/06/2019)

### Fixed
- (React) [InputTextFuzzy] DP-13924: Fixes bugs caused by either options with a large amount of characters or queries with a large amount of characters. #559
- (React) [FeedbackForm] DP-14273: Fixes a bug when the FeedbackForm is used with server side rendering caused by b-jsonp not checking for window. #610

## 9.9.1 (06/03/2019)

### Fixed
- (React) hotfix: Install `airbnb-prop-types` package as direct instead of dev package dependency in Mayflower-React.

## 9.9.0 (06/03/2019)

### Added
- (React) [FeedbackForm] DP-14085: Added the FeedbackForm component for submissions to Formstack. #599
- (Patternlab) Added `.nvmrc` file #600

### Changed
- (React) [Paragraph] DP-14085: Added support for using props.children with the Paragraph component instead of props.text. #599
- (React) Removed `yarn.lock` file #600

### Fixed
- (React) [Icon] DP-13970: Removed usage of webpack's require.context in favor of dynamic ES6 imports. #564
- (React) [DecorativeLink] DP-13970: Fixes warnings appearing related to the title prop when it's not set or passed. #564
- (React) [Pagination] DP-13970: Reworked props to use destructoring. #564
- (React) [ListingTable] DP-13970: Fixes the prop type definition for items to remove console warnings. #564
- (React) [HeaderSearch] DP-13970: Fixed console warning from using postInputFilter when it's not passed. #564
- (React) [ButtonWithIcon] DP-13970: Changed the storybook story to create Icons within each story instead of outside of them. #564

## 9.8.0 (05/29/2019)

### Added
- (Patternlab) DP-1379: Set focus state for elements on Topic pages
- (Patternlab) [Descriptive link wrapper] DP-14006: Add new "Descriptive links wrapper" organism and associated "Descriptive link" molecule to handle when a brief description and an associated link are needed.

### Changed
- (Patternlab) DP-11737: Downgrades font size from 800 to 700 for event-teaser and publish-state
- (Patternlab) DP-13088: Change sticky TOC to appear only if there are 3 or more sections not including related and contacts
- (Patternlab) DP-13967: Fix the heading size for the Related Services and Additional Resources heading from h3 to h2.

### Fixed

## 9.7.0 (05/13/2019)

### Fixed
- (React) [HelpTip] DP-13672: Fix css for bypassMobileStyle. #551
- (Docs) Update Mayflower project issue template and fixed links on homepage. #549

### Added
- (React) [InputCurrency] DP-13672: Add `showButtons` prop to control whether the up/down buttons are shown. #550
- (React) [HelpTip, CalloutAlert] DP-13672: Add white theme option styles. #552
- (React) [Button] Add `classes` prop to button to allow appending custom classnames #554
- (React) [Icon] Add `zoom-in` `zoom-out` `refresh` icons #554


## 9.6.0 (05/01/2019)

### Added
- (Patternlab) [SectionLinks] DP-13100: Changed topic card heading styles, and footer CTA styles #542
- (React) [InputTextFuzzy] DP-13688: Added option to render all options as suggestions by default, via prop `renderDefaultSuggestion` #544
- (React) [Storybook Config] DP-13688: Added storybook console addon #544

### Removed
- (Patternlab) [assets] DP-12475: Remove richText.js. #505
- (Patternlab) [RichText] Removed js flag classes for richText.js. #505

### Deprecated
- (React) [InputTextTypeAhead] DP-13688: Deprecate InputTextTypeAhead. #544

### Fixed
- (React) [FilterBox] Fixed warning caused by using `start` instead of `flex-start` within stying. #543

## 9.5.1 (04/17/2019)

### Security
- (Patternlab) DP-13509: Update the jQuery from 3.3.0 to 3.4.0.

## 9.5.0 (04/17/2019)

### Fixed
- (Patternlab) [Footer] DP-1323: remove `<b>` tag from footer. #526
- (React) [Footer] DP-1323: remove `<b>` tag from footer. #526

### Changed
- (PatternLab) [MainNav, Header] DP-6198: a11y change keyboard behavior for navigation to be tab based. #488
- (PatternLab, React) [Pagination] DP-6354: A11y - fix pagination to use links rather than buttons and access accessibility features. #490
- (Patternlab, React) [Footer] DP-6358: Change tab order in footer. #527

## 9.4.2 (04/10/2019)

### Fixed
- (React) [InputCurrency] DP-13450: Fixed bug relating to error handling on blur in InputCurrency. #533

## 9.4.1 (04/10/2019)

### Fixed
- (React) [InputCurrency, InputNumber] DP-13167: Fixed handleAdjust logic so that min/max are not required for up/down buttons to work. #518
- (React) [InputNumber] DP-13167: Fixed the initial steps when using up/down without a default value and decimal formatting onBlur. #518
- (React) [Tab] DP-13409: Fixes bug causing the handleClick callback function on Tabs click to not be called. #529
- (React) [TabContainer] DP-13409: Adds onTabChange prop to the tab container that is triggered if a tab in the container is changed. #529
- (React) [InputTextFuzzy] DP-13425: Prevent onSuggestionClick being triggered on unexpected keyboard events. #530

## 9.4.0 (03/28/2019)

### Added
- (Docs) Add an issue template for submitting Mayflower project to the implementation listing #520

### Changed
- (React) [*] DP-12932: Upgrades storybook and related add-ons to version 5.0.x. #516
- (React) [*] DP-12932: Adds storysource and a11y add-ons. #516

## 9.3.0 (03/20/2019)

### Changed
- (Patternlab) DP-8334: Use NPM instead of Bower to pull in front end dependencies #502
- (Patternlab) [RelatedLocations] DP-12843: Changes to location page to show link to all locations #496
- (Patternlab) DP-12682: Changes to the details.twig to use the class `sidebar sidebar--colored` in sidebar. #485
- (React) [InputNumber] DP-12921: Limits the component from changing value between the min and max passed. #503
- (React) [InputCurrency] DP-12921: Limits the component from changing value between the min and max passed. #503
- (React) [InputCurrency] DP-12734: Removes placeholder on focus if no value in input. Puts placeholder back if no value in input. #503

### Removed
- (Patternlab) DP-12682: Removed the social media links on the Howto page. #485

### Added
- (Patternlab) [TabularData] DP-12682: Added a block to the tabular-data.twig for template mapping. #485

### Fixed
- (Docs) [Readme] DP-12921: Fixed broken link in Mayflower readme #501

## 9.2.1 (03/13/2019)

### Fixed
- (React) [TabContainer] DP-10868: Adds a11y support to Tab and TabContainer components.#497

### Added
- (Patternlab) [OrganizationNavigation] DP-12928: Add link list specific classes: `ma__org-nav-i-want-to__findService`, `ma__org-nav-i-want-to__learnAbout`,`ma__org-nav-i-want-to__login` to sections for GTM. #504

## 9.2.0 (03/05/2019)

### Added
- (Patternlab) [Header] DP-4562: Set focus state for search on mobile menu in mobileNav module. #473
- (React) [HelpTip] DP-12875: Add `disabled` prop to disable HelpTip trigger text. #494

### Fixed
- (React) [InputSlider] DP-12732: Allows slider callback and updates form context on handler drag (Added onUpdate prop) #495
- (React) [InputSlider] DP-12732: Allows keyboard actions and slider track click to update value (Changed handleChange from using onSlideEnd to onChange) #495
- (React) [InputCurrency] DP-12807: Prevent InputCurrency returning NaN when default value is set to null #484
- (React) [ErrorMessage] DP-12806: Fix error message inline styling #484
- (React) [InputSlider] DP-12875: Disable handle button when InputSlider is disabled. #494
- (React) [InputCurrency] DP-12890: Fix `NaN` value when defaultValue is null using up/down buttons. #498

### Changed
- (Patternlab) [SectionLinks] DP-9249: Topic card more links #472
- (React) [InputCurrency] DP-12890: Pass event type to callback #498


## 9.1.1 (02/19/2019)

### Fixed
- (React) DP-12776: Hotfix value delay in InputNumber callback and event returning all null values. #482

## 9.1.0 (02/15/2019)

### Added
- (Patternlab) DP-9494: MF Add related orgs/topics to topic page. #429
- (React) DP-12560: Add input checkbox. #468

### Changed
- (React) DP-12561: Updates the help tip organism so users can pass multiple help tips in a single span of text. #469
- (React) DP-12749: Style helptip trigger and add highlight color. #478

### Fixed
- (React) DP-12724: Fix helptip mobile tray z-index. #474
- (React) DP-12728: Allow input currency defaultValue to be null. #477
- (React) DP-12733: Fixed error message responsive styling. #475
- (React) DP-12733: Fixed icon classes bug. #475

## 9.0.0 (02/13/2019)

### Changed
- (React) DP-12665: Upgrades react to version 16.8.1 and node to version 10.15.1. #467
- (React) DP-12458: Updates storybook to version 4.1.1 & related updates to component stories for the withInfo and withKnobs addons. Adds related babel package dependencies as storybook 4 upgrades to Babel 7. Updates storybook webpack config per upgrade to Babel 7. #464
- (React) DP-12458: Updates nwb to version 0.23.x. #464
- (React) DP-12458: Updates backstop to version 3.9.2. #464
- (Patternlab) DP-11507: Remove ll.8-29 where add hooks to table richtext.js. #450

## 8.26.0 (02/07/2019)

### Changed
- (Patternlab/React) DP-11666: Replace `<section>` with `<div>` for `.ma__header-search`  #417
- (React) DP-12414: Modifies Table component to make it responsive, using the Table Responsive pattern from pattern lab. #459
- (React) Refactors Input, InputNumber, InputSlider, InputCurrency to use Form Context and added story Form. #460

## 8.25.0 (02/06/2019)

### Added
- (PatternLab) DP-11135: Create Mayflower for new feedback form - Option 2a (contact link) #352
- (PatternLab) DP-11301:  Feedback integration updates and merging to develop #434
- (PatternLab) DP-12404: Added a formDownloads block to the following twig templates: court-rules.twig, policy-advisory.twig, & executive-order.twig. #440
- (PatternLab) DP-12464: Added a block to the action-steps.twig for decorativeLink. #451
- (React) Added options to render value above the InputSlider handle #455

### Fixed
- (React): DP-12519: Fixed button height for overflow content and added class prop to radioButtons to allow override default breakpoints to stack at medium or large breakpoints. #461
- (Patternlab) DP-9204: Add a label to the video container. Change the reading order to 1. label, 2. transcript link, 3. video for screenreader users. #433

## 8.24.1 (01/31/2019)

### Fixed
- (React): Remove will receive props from input component. #454
- (React) add onBlur to InputNumber and consolidate countDecimal util function and add a default unit prop to InputNumber. #456

## 8.24.0 (01/31/2019)

### Changed
- (Patternlab) DP-9200: Add labelContext to decorative link #425

### Fixed
- (React) #449
  - allow InputNumber to update on defaultValue prop change
  - fix disabled styling of InputNumber with unit on disabled
  - make up/down buttons optional
  - add option to skip the slider

## 8.23.3 (01/30/2019)

### Fixed
- (React) hotfix: change input buttons positioning from absolute to using flexbox.

## 8.23.2 (01/30/2019)

### Fixed
- (React) hotfix: preventDefault inputSlider handle onClick.

## 8.23.1 (01/30/2019)

### Fixed
- (React) hotfix: fix proptype check function name.

## 8.23.0 (01/30/2019)

### Added
- (React) DP-12303: Adds CompoundSlider, InputSlider, Error components and adds the react-compound-slider package. #431
- (React) DP-12303: Adds FormContext support, changes the way Input renders to reduce re-renders on context changes. #431
- (React) DP-12413: Add unit option in InputNumber for rendering percentage. #436
- (React) DP-12451: Added an inline option for Input and fixed responsiveness. Allow Input labelText to render elements other than a string. #441

### Fixed
- (React) bugfix: Allow InputNumber up/down button onClick callback to access value from input. #439

## 8.22.0 (01/29/2019)

### Added
- (React) DP-12338: Added a help tip organism. #432
- (React) DP-12338: Added a close icon. #432
- (React) DP-12379: Added InputNumber component. #430
- (React) DP-12379: Added disabled state to InputCurrency and allow passing custom onChange callback. #430
- (Patternlab) DP-12387: Added a block to the steps-ordered.twig and action-step.twig to use a view mode on the Drupal twig. #428

### Fixed
- (React) DP-12428: Fix missing key on the radio button group and id prop issue. #435

## 8.21.0 (01/24/2019)

### Added
- (React) DP-12318: Adds the form components input radio button (atom) and input radio button group (molecule) to mayflower-react. #424
- (PatternLab/React) DP-12318: Adds a primary lighter color and error color to scss variables. #424
- (React) DP-12293: Adds Input, InputCurrency components and InputContext context. Uses Numbro.js library. #419
- (React) DP-12320: Added Callout Alert pattern and added themes and icon options. #418

### Changed
- (React) DP-12318: Updates the eslint settings for better handling of jsx syntax. #424

## 8.20.0 (01/23/2019)

### Changed
- (Patternlab/React) DP-11662: Replace the markup validation flagged elements `<section>` with `<div>` for `.ma__utility-nav` and `.ma__utility-panel`. #415
- (React/Patternlab) DP-11668: Change to a valid container for `.ma__main-nav`. #416
- (React/Patternlab) DP-12120: Hide feedback wrapper in print #406

## 8.19.1 (01/17/2019)

### Fixed
- (Patternlab) DP-12234: Fix the spacing issue after the conditional content for phone in contact item. #410
- (React) DP-12080: Add capacity to pass an id to the input tag of the InputTextFuzzy atom. #412

## 8.19.0 (01/16/2019)

### Added
- (React) DP-12114: Add option to render an external link in Utility Nav. #400

### Changed
- (React) DP-12117: Add option to conditionally render the main nav top level link. #408

### Fixed
- (React) DP-11128: Fixed image promo title not wrapping in IE11 bug. #404
- (Patternlab) DP-11437: MF Location search by city/zip fix for autocomplete issue. #401
- (React) DP-11667: Add search role to HeaderSearch molecule for a11y. #405
- (React) DP-11683: Set a condition in the decorative link atom to only add title when its value is available. #407
- (React) DP-11684: Hides arrow in decorative link so not read by the screen reader. #407
- (React) DP-12183: Fixes alignment issue of download icon in the decorative link react component in IE11 #403

## 8.18.0 (01/08/2019)

### Changed
- (React) DP-12012: Enable the footnotes atom in react to render raw html if passed a child. Update the footnote style to up arrow. #397
- (Patternlab) DP-9183: Expand button on alert. #388
- (Patternlab) DP-9775: MF Adjust print styles for topic and org pages to have less space at top. #392
- (Patternlab) DP-9186: Change section tags to div tags on rich text pattern for better semantics. #391

### Fixed/Patched
- (React) DP-11682: Updated the decorative link component in React when showing an icon to resolve a11y issue. Now the icon is included in the a tag part of the link so it is associated with the link for screenreaders. #386
- (Patternlab) DP-11400: Add more spacing on org page above "More about [name]". #368
- (Patternlab) DP-5230: Fix print styles: how-to left alignment. #370
- (Patternlab) DP-5232: Fix print styles: remove feedback button. #390
- (Patternlab) DP-9185: MF [a11y] Use proper html element for semantics. #389

## 8.17.0 (01/04/2019)

### Changed
- (React) DP-11888: Adds the ability to pass a function to tabs to run after its default click handler. #394

### Fixed
- (React) DP-11634: Update the MainNav molecule for better a11y, enabling users to tab through the navigation menu. Also updated the svg-sprite-loader package, enabling aria attributes on the Icon component. #385

## 8.16.0 (12/19/2018)

### Changed
- (Patternlab) DP-5859: Checkboxes missing from What You Need section on print style for How To Pages #369

### Fixed
- (Patternlab) DP-10231: bug fix for location pagination #362

## 8.15.0 (12/12/2018)

### Changed
- (Patternlab) DP-9727: Header and spacing size reductions #363

### Fixed
- (Patternlab) DP-10447: Pages show excess scroll space to right and bottom in IE11 #367

## 8.14.1 (12/07/2018)

### Fixed
- (React) DP-11398: Adds the ability to submit without selecting a suggestion, misc bug fixes.

## 8.14.0 (12/05/2018)

### Added
- (Patternlab) DP-10265: Added a block for the map to the location-banner.twig. #371

### Fixed
- (Patternlab) DP-11102 and DP-11026: responsive tables obscure stickTOC and final table row #361

## 8.13.0 (12/04/2018)

### Added
- (React) DP-10789: Ports Teaser Listing Organism to React #324

### Fixed
- (React) DP-11380: Fix tab scrollIntoView to prevent scrolling vertically #360
- (React) DP-11402: Fixes a bug in InputTextFuzzy where hitting enter on a suggestion did not pass a suggestion object to the onSuggestionClick prop function. #366

## 8.12.0 (11/28/2018)

### Added
- (Patternlab) DP-10264: Support Google static maps for locations #344


## 8.11.0 (11/09/2018)

### Added
- (React) DP-11077: Adds Breadcrumb and BreadcrumbItem components. #348
- (React) DP-11078: Adds InputTextFuzzy component. #349

### Changed
- (Patternlab) DP-11030: Create a clearer distinction between contact and related in service #343
- (React) DP-11158: Adds ListingTable to the index.js file. Fixes unique key issues on lists. Adds tbody tag to table. Fixes PropTypes definition for rows prop. #354
- (Patternlab) DP-9883: Updated the styles of the contact groups in the contact row to display the same number of groups in each column under the "Contact Us" section of the org page. #223

### Fixed
- (React) DP-11205: Fix FootNote atom bug. #355

## 8.10.0 (10/31/2018)

### Changed
- (Patternlab) DP-10793: Update video layout on service pages #337

## 8.9.0 (10/26/2018)

### Added
- (Patternlab) DP-10774: Implements sticky table of contents on Advisory, Decision, Executive Order, Regulation, and Rules of Court content types. It also updated the integration of the stickty table of contents for Information Details, Curated Lists, and Guide pages. #339
- (React) DP-11038: Add an option for footer component to show footer links category heading. #340

### Changed
- (React) DP-10244: Componentize SCSS for molecules #297
- (React) DP-10764: Componentize SCSS for organisms #339
- (Patternlab) DP-9176: Add aria-label attribute to the table of content accordion button in binder page to override the symbols for screen readers, remove the visually hidden text which aria-label attribute replaces with. #215

### Removed

### Fixed
- (Patternlab) DP-10362: Makes Org subnav dropdowns keyboard accessible. #308
- (Patternlab, React) DP-10986: Add font smoothing for Texta font weight accuracy. #336

## 8.8.0 (10/24/2018)

### Added
- (React) DP-10799: Add FootNote and FootNoteLink atoms to mayflower react. #317
- (React) DP-10910: Add disabled prop to inputTextTypeAhead and conditionally render filter controls in FilterBox #327
- (React) DP-10913: Adds Teaser, OperationalHours components. #292
- (React) DP-10765: Porting Table of Contents Hierarchy component. #311

### Changed
- (React) Componentize scss for page header organism. #329

### Removed
- (React) DP-10662: Remove deprecate alt value from site logo image. #315
- (React) DP-10667: Remove aria-label from search button. Button with icon has aria-label only when it has value. #318

### Fixed
- (React) DP-10895: Fix bug in page flipper if intro props are not passed. #330


## 8.7.0 (10/17/2018)

### Added
- (React) DP-10784: Port Listing Table in React from PL. #313

### Changed
- (PatternLab) DP-10756: Modify display of relationship indicators on mobile. #310

### Fixed
- (Patternlab) DP-10721: Remove duplicated social heading on service page and remove backward compatible sidebar heading to use IconLink comp heading in the template. #316

## 8.6.0 (10/16/2018)

### Added
- (React) Add react-table as a DataTable component directly using react-table API. #289
- (React) DP-10649: Add TabContainer and Tab components. #298
- (React) DP-10693: Add ArrowButton atom component, ArrowNav molecule component and PageFlipper organism component. #301

### changed
- (React) DP-10770: Update SiteLogo props structure in Header component making it fully configurable and sets default props #312
- (React) DP-10770: Componentize Header related component styles, including HeaderSearch, MainNav, UtilityNav, UtilityPanel and Header #312

## 8.5.0 (10/10/2018)

### Added
- (Patternlab) DP-8725: Applies responsive functionality to tables in rich text. #205
- (Patternlab) DP-10522: Adding a section to how-to's for return visitors #294
- (React) DP-10690: Added monospace font Source Code Pro into Mayflower React for dataviz and datatables. #246
- (React) DP-10678: Adds passable aria-label prop to tabs molecule to address a11y issue. #299

### Fixed
- (Patternlab) Updated header alert CSS to fix underline issues with multi-line sentences. #281
- (Patternlab) DP-8019: Update sticky TOC to only target h2 elements. #302
- (React) Fixed filterbox control section spacing, added filter desktop hidden option and fixed button theme c-primary proptype . #295
- (React) Fixed SearchBanner accessibility issues relating to the filterbox expand/close button. #296


### Changed
- (React) DP-10244: Changes atoms to have styles in the component. #287


## 8.4.0 (10/05/2018)

### Added
- (Patternlab) DP-10025: Update sticky TOC selector to target new curated list structure. #242
- (React) DP-10441: Adds a slim header organism for targeted applications to mayflower react. #286
- (React) DP-10440: Adds FooterSlim organism. #285
- (React) Adds passable suggetions prop to HeaderSearch component. #288

### Fixed
- (React) Fixed AccordionWrapper child PropType. #275
- (Patternlab) DP-10570: Updates watch files for JavaScript. #284

### Changed
- (Patternlab) DP-10013: Offered by relationship indicator row changes Medium priority. #231
- (Patternlab) DP-10274: New feedback button obscures navigation elements on mobile. #237


## 8.3.0 (9/28/2018)

### Added
- (React) DP-10057 Created Tooltip component with stories. Added Question Mark SVG to Icon component.
- (React) DP-10502: Adds ButtonFixedFeedback component.
- (React, Patternlab) DP-10514: Add primary `.ma__button-search` and secondary `.ma__button-search--secondar` usage themes to button search  #261

### Fixed
- (Patternlab) DP-10514: Fix and unify button search hover styles in organization-navigation search #261
- (React) Fixes error thrown due to value passed to selectbox that does not exist.

### Changed
- (React) DP-10521: Refactor FilterBox to allow any form components  #277
Note: This will need to be followed up in search and other apps consuming FilterBox / SearchBanner
- (React) Make SearchBanner with postInputFilter responsive, remove classname specific styles for preInputFilter for mobile responsiveness  #280


### Fixed
- (React) DP-10497: Updates the selectbox atom in Mayflower-React, passing the default selected prop to state in the contructor. Also updates the setting of select in the selectbox, changing for ref to value.

## 8.2.0 (9/26/2018)

### Added
- (React) Componentize scss into results heading  #268
- (React) Componentize scss into error page organism and pages  #271

### Fixed
- (React) DP-10497: Updates the selectbox atom in Mayflower-React, passing the default selected prop to state in the contructor. Also updates the setting of select in the selectbox, changing for ref to value.

## 8.1.0 (9/24/2018)

### Added
- (Patternlab) DP-9272: Set up an id for `item.label` to associate with "aria-describedby" in decorative link for its directions link to add link context in Contact. #220
- (React) Replace hard coded image with Image component and add configurable fields to SiteLogo. #264
- (React) Add an option to allow pass in component as a post input filter to HeaderSearch and SearchBanner #259

### Removed
- (React) EEC support: removes the component name check in AccordionWrapper child validation



## 8.0.1 (9/19/2018)

### Fixed
- (Patternlab, React) Fix npm publish circle scripts #258

## 8.0.0 (9/19/2018)
:loudspeaker: We are going to undertake major refactoring work on component naming, markup and classnames in version 8, please refer to this changelog👆 or [Mayflower components documentation](https://massds.gitbook.io/mayflower/components) or join [Mayflower Public Slack](https://join.slack.com/t/mayflowerdesignsystem/shared_invite/enQtNDIzNDc2MjQwMzM2LTAzYTcyZTI3ZDZiMjZmNGIxZWE2OTBiY2FlMmQyNjAwODVmNTQ4ZDhlMzVjMmMxMjA2YTc2MTgzZmNiZjUyY2E) and watch out for API changes if you decide to move to V8.

### Added
- (React) DP-8086: Adds the following new components: GeneralTeaser, IconLink, Link.
- (React) DP-8086: Modifies Image component to add a new prop for classnames: classes.
- (React) DP-10392: Adds shared assets into build
- (React) DP-10392: Adds SharedAsset path alias handling
- (Patternlab & React) #236:
	- Creates style for tertiary & quaternary button variants & associated story in PL/storybook.
	- Adds color variable for 50% bay blue called c-primary-lighter


### Changed
- (Patternlab) DP-9189: Adds aria-lable to override the top button label in sticky toc. #216
- (Patternlab) DP-9193: Make TOC skip link visible at focus #180
- (Patternlab) DP-9255: Add conditions to place 'title' and 'aria-labelledby' only when their values are available. #218
- (Patternlab)  DP-10084: MF Change to styling of More links on service page
- (Patternlab) DP-10157: [MF] How-to BM1: Add slight visual emphasis to mobile sticky nav
- (Patternlab & React) #236:  
	- Updates base button classnames based on theme prop to reflect new naming variable (c-primary, c-primary-alt, c-highlight, c-dark-gray)
	- Removes outline prop from button.
	- Adds usage prop to button to reflect primary, secondary, tertiary, and quaternary designs.
	- Updates color variables to be named based on usage and not color.
	- Update back-button molecule to include button classname changes.

### Fixed
- (Patternlab) DP-10131: fix IE 11 specific overflow style on contact list #197
- (React) DP-10368: Fixed SearchBanner molecule filters position when no tabs are rendered.
- (React) Fix react visual regressions by setting a default date for general teaser in storybook







## 7.1.0 (9/12/2018)

### Added
- (Docs) Release docs 0.1.0 added first-round documentation for buttons, headings links, lists, table, text area, select box, checkbox, radio button, pagination, relationship indicator, tooltip, accordion and global accessibility.
- (Docs) Release docs 0.2.0 break down and clean up global accessibility guidelines.
- patternlab DP-9337:  Implement Organization Page navigation menu

### Changed
- (Patternlab) DP-5917: Updates to truncate long pagination displays with ellipsis. #196.
- (Patternlab) DP-9875: Adjust the package-lock.json and CircleCI for this change to yarn.lock file. #217
- (React) DP-10134: Augments react Backstop scenario detection so stories with multiple add() calls will all be tested.
- (Patternlab, React) DP-10156: Consolidate and replace letter-spacing to variables `$letter-spacing-large`, `$letter-spacing-medium`, `$letter-spacing-small` and `$letter-spacing-default`.
- Patternlab DP-9912: Replicated related links to the bottom of the page along with changes style to the heading. #214
- (Patternlab) DP-10287: Adds block to page-overview twig file for responsive images. #230
- (Patternlab & React):
	- Updates the naming of our global color variables.
	- Pulls originally naming from documentations.
	- Updates grayscale color variables.
	- Updates color variables to be named based on usage and not color.

### Fixed
- (Patternlab) DP-5955: Fixes top alignment of the "Related Services" and "Additional Resources" split columns block on tablet view mode. #184
- (Patternlab) Fixes patternlab SCSS watching.

### Removed
- (Patternlab) DP-9875: Remove the yarn.lock #217
- (Patternlab & React):
	- Removes #757575, replacing with #707070 color variable.
	- Removes feedback accessibility fix for green issue variable.

## 7.0.1 (8/30/2018)

### Fixed
- (PatternLab) z-index fix for feedback button to always ensure it appears on top. #209
- (PatternLab) Allow deploy tag jobs to be rerun #206

## 7.0.0 (8/29/2018)

### Changed
- (Patternlab) DP-9702: replace floating "Tell us what you think" button with fixed feedback button
- patternlab / DP-10012: offered by relationship indicator row changes
- (Patternlab) DP-10056: Mayflower Patternlab has an updated build process that includes the following changes:
    * Gulp Patternlab tasks now run `dist:build` automatically.  The `dist` folder contains the fully compiled Mayflower Artifacts, and can be placed anywhere on your system, not just inside the mayflower repository.
    * Patternlab deployment tasks have been moved out of gulp and into the CircleCI configuration to simplify our Gulp tasks.
    * The `massgov/mayflower-artifacts` Composer package has been given a `type` of `drupal-library` so it is installable to a specific location on the filesystem.
- (Patternlab, React) DP-10056: Mayflower React and Mayflower Patternlab now manage the version number in their respective `package.json` files independently.  We no longer need to bump package version numbers manually on release - simply cut the tag.
- (NPM Artifact): The @massds/mayflower NPM repo has been restructured to match the `massgov/mayflower-artifacts` composer package.

### Fixed
- (Patternlab) DP-10029: Updated styles to fix spacing on non-hyperlinked images on location listing row.

### Updated
- Patternlab DP-9912: Add new relationship indicator row to multiple content types. #149


## 6.3.0 (8/27/2018)

### Added
- (React) DP-9981: Adds standard accordion components and functionality to Mayflower-React. Also fixes VR bug related to react components.
  - Adds AccordionItem molecule with secondary, borderless, emphasized, and subtle variants.
  - Adds AccordionWrapper organism to Mayflower React, which is a dumb wrapper for styling grouped AccordionItems.
  - Adds Collapse animation atom to Mayflower React based off of the Bootstrap React animation.
  - Adds dependency to react-transition-group for Collapse animation atom.
  - Add the SvgCircleChevron icon atom to Mayflower-React.
  - Adds dependency to classnames for simplifying conditional classname set up. Other component should be refactored to leverage this new package dependency as a follow up.
- (React) DP-10028:
  - Add error message as an atom with error and success states
  - Add InputError and InputSuccess icons
- (React) DP-10098: Added `bourbon`, `normalize-scss` and `bourbon-neat` as react dev dependencies.

### Changed
- (Patternlab) DP-9522: Updates the Locaton Listing component to updated designs.
- (React) DP-9919: Directly consume global level SCSS variables from shared assets.
- (React) DP-9981: Changes heading atom in Mayflower React, adding the option to pass a classname to a heading component.
- (React) DP-10098: Consume scss and images directly from shared assets.
- (Patternlab, React) DP-10107:
  - Make current button "small" the default button size and add "large" and "small" variations.
  - Update the button size for location listing CTA to align with default size.


### Fixed
- (Patternlab) DP-9486: Make location filter persist on location listing page.
- (Patternlab) DP-9486: Fixed the location listing autocomplete search filter. #189
- (React) DP-9981: Fixes issues related to visual regression of react components without a story and with nested variants.
- (React) DP-10069: Render current year in footer component and make footer fully configurable.

### Removed
- (React) DP-10098: Removed Mayflower npm dependency in mayflower react.

## 6.2.3 (8/17/2018)

### Fixed
- DP-10102: Revert recent change to the sticky table of contents because it was causing additional items and no sticky heading updates.

## 6.2.2 (8/16/2018)

### Fixed
- Bypassing issue where tag 6.2.1 exists after missing react json file update in v6.2.1.

## 6.2.1 (8/16/2018)

### Fixed
- (Patternlab) DP-9571: Restore raw filter on raw-html.twig to fix visual breakage on mass.gov.

## 6.2.0 (8/15/2018)

### Added
- (Patternlab) DP-9431: Update Curated Lists to use Sticky TOC
- (Patternlab) DP-9579: Add a comment to keep raw filter from 03-organisms/by-author/event-listing-interactive.twig to prevent rendering ascii characters.
- (Patternlab) DP-9580: Adds a comment to keep the raw filter to rendering ascii characters.
- (Patternlab) DP-9831: Add contact and related links in sidebar to curated lists.

### Changed
- (Patternlab, React, Docs) Changed the green theme color globally to #388557 for accessibility. #155
- (Patternlab) DP-9521: Updates theme of location row to new theme design.
- (Patternlab) DP-9693: Modify body text color to use a darker grey.
- (Patternlab) DP-9862: Remove all absolute URL references from Patternlab data and templates.

### Removed
- (Patternlab) DP-9569: Remove raw filter from `_patterns/01-atoms/08-lists/ordered-list.twig`
- (Patternlab) DP-9571: Remove raw filter from `_patterns/01-atoms/11-text/raw-html.twig`
- (Patternlab) DP-9574: Remove raw filter from `02-molecules/google-map.twig`

### Fixed
- (Patternlab) DP-10032: Fix for binder overlay button click not triggering overlay.
- (Patternlab) Update location that JavaScript templates are copied



## 6.1.0 (8/8/2018)
### Added
- (React) DP-9399: Adds BackstopJS visual regression testing to the react build. #129

### Changed
- (Patternlab) DP-9839: Updated styling and language of service finder section for general and boards organizations to match that of elected officials. #122
- (React) Refactored ButtonWithIcon to replace ButtonSearch component. #81

### Fixed
- (Patternlab) DP-9900: Fix gulp sass watch and live reload on scss partials change. #142
- (Patternlab) Update location that JavaScript templates are copied. #144

## 6.0.1 (8/7/2018)

Hotfix for JavaScript pagination

### Fixed
- (Patternlab) DP-9871: On pagination, replace state instead of push state to avoid requiring additional back button clicks to get to the previous page.

## 6.0.0 (8/3/2018)

Monorepo with shared assets and synced releases going forward ;)

### Changed
- Duplicate images and move fonts and scss partials from patternlab assets in the root assets for sharing #131


## 5.35.1 (8/2/2018)
### Fixed
- (React) Install pip, awscli in react_deploy_tag for circleCI #127

## 5.35.0 (8/2/2018)
### Added
- (React) DP-9527: Adds automatic build, npm publish, S3 sync to mayflower-react
- (React) DP-9750: Added HelperText form atom component to Mayflower React library, including a new Story for the new component to be used with Storybook.

### Removed
- (Patternlab) DP-9567: Remove raw filter from `_patterns/01-atoms/06-rich-text/icon-list.twig`
- (Patternlab) DP-9577: Remove raw filter from `_patterns/02-molecules/org-selector.twig`

### Fixed
- (React) Fix proptype warning in organism/filterBox #117

### Changed
- (Patternlab) DP-9854: Updates babelify to 8.0.0
- (Patternlab) DP-9854: Update javascript IIFEs to work under newer versions of Babel. #113

### Security
- (Patternlab, React): Update npm dependencies to fix multiple security vulnerabilities.  Updated packages include:
    - nwb
    - node-sass-chokidar
    - npm-run-all
    - react-dom
    - eslint
    - eslint-plugin-react
    - browser-sync
    - gulp-debug
    - gulp-sass
    - gulp-svgstore
    - node-sass
    - node-normalize-scss

## 5.34.1 (8/2/2018)

##  Fixed
- (Patternlab) Fix JS pager query string colliding with application pager parameters.

## 5.34.0 (8/1/2018)

### Removed
- (Patternlab) Remove gov theme and all references #93
- (Patternlab) Remove unused pilot theme #104
- (Patternlab) Hide back to button on all pages #106


## 5.33.0 (7/25/2018)

### Changed
- (Patternlab) DP-9441: Decreases spacing between Stacked Rows when stacked.
- (Patternlab) DP-9699--relationship-indicator-integration

### Removed
- DP-9568: Remove raw filter from /styleguide/source/_patterns/01-atoms/08-lists/checklist.twig.
- DP-9570: Remove raw filter from _patterns/01-atoms/08-lists/unordered-list.twig.
- DP-9572: Remove raw filter from _patterns/02-molecules/contact-item.twig.
- DP-9573: Remove faw filter from _patterns/02-molecules/event-teaser.twig.
- DP-9575: Remove raw filter from 02-molecules/header-contact.twig.

## 5.32.2 (7/19/2018)

### Changed
- (Patternlab) Bumped the version up to 5.32.2 in the package.json.

### Fixed
- (React) Fixed the NPM token to be able to deploy a new tag version in NPM.

## 5.32.0 (7/18/2018)

### Added
- (Patternlab) DP-5329: Adds browser history enabled pagination for listing pages. #8

## 5.31.0 (7/11/2018)

### Added
- (Patternlab) DP-9475: Added Twig block around stack row title for overrides. #18

### Changed
- (Patternlab) DP-8177: Adds a selector to the sticky TOC JavaScript to target curated lists #6
- (Patternlab) DP-9145: design updates to relationship indicators #7

### Fixed
- (Patternlab) DP-9435: Adds text-wrapping on header alert messages to fix bug on mobile devices #24

## 5.30.0 (7/3/2018)

### Changed
- DP-8804: Updates Google Maps API version used in Mayflower.

## 5.29.0 (6/20/2018)

### Added
- DP-9146/DP-8825: Adds teaser listing group organism to apply accordion behavior to multiple teaser listings at once.
- DP-9017: Image placement on Guide pages using focal point.

### Changed
- DP-9243: MF fix info details to show contact and related in sidebar as well as bottom on desktop.

### Removed
- DP-1234: Removed alt value from the state seal since the text "Mass.gov" is duplicate to the content in the followed <span>.


## 5.28.0 (6/13/2018)

### Added
- DP-8825: Adds teaser listing group organism to apply accordion behavior to multiple teaser listings at once.

## 5.27.0 (6/06/2018)

### Added
- DP-8992, DP-8993, DP-8969: Adds a new 'contact row' organism to get around limitations of existing contact component options.

### Changed
- DP-8897: Relationship indicator change to expose organization on public pages
- DP-9077: Relationship indicator changes


## 5.26.0 (5/30/2018)

### Fixed
- DP-8574: Update jQuery version for stickyTOC Firefox bug.

### Added
- DP-7363: Enable srcset on the image pattern and demonstrate usage on Press Release with Image Page.

### Changed
- DP-6907: Change default ordered list type styling in rich text fields.
- DP-9010: MF Update row order for boards page.


## 5.25.0 (5/23/2018)

### Changed
- DP-8631: Provides twig blocks to support overrides and template mapping of data.
- DP-8854: Update the footer template to match the one in Drupal.
- DP-8949: Mayflower Subpatterns for General Teaser.

### Fixed
- DP-9057 - Fix IE11 bug where featured image in mosaic was not appearing.

## 5.24.0 (5/16/2018)

### Fixed
- DP-8956: Update contact us to provide a way to keep address above other information even if there is only two contact groups.

## 5.23.0 (5/15/2018)

### Added
- DP-8825: Adds an expandable/accordion variation to the teaser listing organism.
- DP-8942: Add missing content examples in JSON for elected official page.

### Changed
- DP-8924: reorder sections in organization page to have featured topics above news.
- DP-8940: Increases font size of short description on org pages to match production website
- DP-8948: Close up contact information on org pages extra horizontal spacing

### Fixed
- DP-8890: Always print expander and let JavaScript control visibility.


## 5.22.0 (5/9/2018)

### Added
- DP-6715: Allow main content of image-promos to be overwritten.

### Changed
- DP-7761: Take html out of map pin title.
- DP-8363: Replace the site logo image with the seal image + text.
- DP-8877: MF create front end code to support display of short description on org page that is separate from contact row.
- DP-8880: Allow a block to be overridden for the sidebar of the stacked row section pattern.
- DP-8891: re-orders Mayflower elements for the Org page variations.

## 5.21.0 (5/2/2018)

### Added
- DP-8711: Added support for multiple entries in the page-banner-linked organism.

### Changed
- DP-8441: Use explicit height instead of responsive iframe container if height is provided.
- DP-8516: Provides twig blocks to support overrides and template mapping of data for person bio page.
- DP-8712: Support 2nd executive in elected official About Row as option.
- DP-8738: Add additional blocks to contact us pattern.
- DP-8612: Elected--contact row adjustments.
- DP-8730: Elected--services heading color change.
- DP-8738: Elected--limit space of contact section logo.

### Removed
- DP-8602: Remove unused slick plugin

## 5.20.1 (4/26/2018)

### Fixed
- Reverted the DP-8612: Add column-layout variation to 'contact us'.

## 5.20.0 (4/25/2018)

### Added
- DP-8569: Add missing header on binder cover page template.
- DP-8594: Adds twig blocks for overriding during implementation of the row reorder for elected officials.
- DP-8612: Add column-layout variation to 'contact us'.
- DP-8674: Adds and uses WOFF2 variants for webfonts.

### Changed
- DP-7500: Update image-link-list to allow overriding the links without losing functionality.
- DP-7600: Extracts looped items into separate patterns.
- DP-7600: Provides twig blocks to support overrides and template mapping of data.
- DP-8597: Social links on elected org page overlap executive area when the links are long or more than x number.
- DP-8642: Fix erroneous width limitation on page-intro sub-title affecting the bio page.
- DP-8648: Fix gap with image background on Elected Official Organization page for wide-widths.

### Fixed
- DP-8701: Replace lost image link styles.
- Fix social media icon colors in Firefox.

## 5.19.0 (4/18/2018)

### Added
- Adds the current mass.gov site logo for the header of the website to mayflower's image assets and allow hiding back-to button in header.

### Changed
- DP-8362: Replace svg templates and template calls with icon() function. Added a processor for icons inserted in alert ajax version.
- DP-8440: Add component spacing to quote organism.
- DP-8454: Switch to TwigJS for rendering result-headings in javascript.
- DP-8454: Switch to TwigJS for rendering pagination in javascript.
- DP-8517: Updates image link rows layout.
- DP-8519: Updates rough transition on expansion.
- DP-8522: Modifies image link grid layout.
- DP-8524: Clean up the release to production documentation in Mayflower.
- DP-8586: Reduce minimum spacing for about section.

### Fixed
- DP-8453: Prevent loading of result heading template until it is required.

### Removed
- DP-8362: Remove svg icon twig templates which replaced with svg files under assets.

## 5.18.1 (4/5/2018)

### Changed
- Bumped the version up to 5.18.1 in the package.json.

## 5.18.0 (4/5/2018)

### Added
- DP-7564: Fixes issue with black line over "Who we serve" stacked row on Elected org page. Fixes issue with media queries on Elected org page.
- DP-8051: Adds page banner variation for use in elected and org detail pages.
- DP-8176: People in curated lists

### Changed
- DP-7483: Organization block list fix.
- DP-8221: Truncates featured item titles past character limit.
- DP-8339: Automate the release process for Mayflower.
- DP-8402: Use dynamic Pattern Lab variables to reduce the amount of files that need to change during the release workflow.
- DP-8455: Make image URLs optional on search banner to allow setting randomized image in javascript.

### Fixed
- DP-7624: Adds cover page example of binder
- DP-8126: Avoid making two ajax calls to the same endpoint when there are two ajax patterns on the same page.
- DP-8378: Fix the page banner display issue in mobile for Topic, Organizaion and Service pages.
- DP-8400: Add fix for binder page jumplinks.
- DP-8436: Moves post content for information details and fixes handling text in sticky header after toc jump link is clicked.

## 5.17.0 (3/29/2018)

### Added
- DP-8341: Added visual regression testing for all templates and pages.

### Fixed
- DP-8378: Fix the page banner display issue in mobile for Topic, Organizaion and Service pages.
- DP-8406: Corrects sticky TOC selector and positioning. Corrects drupal integration styling of page flipper on binder navigation.

### Changed
- DP-8332: Update build process for Mayflower to Circle 2.0

## 5.16.0 (3/23/2018)

### Added:
- DP-7758: Adds Organization Detail content-type template.
- DP-7766: Adds Sticky Table of Contents organism pattern for use in Information Details content-type.
- DP-7767: Adds Overlay Table of Contents organism pattern, Adds Interal Binder Page example.
- DP-7341: Adds Person Card organism and About Section organism for use on Elected Official pages.

## Changed:
- DP-7767: Changes to the `section` objects and `title` property of the Table of Contents Hierarchy organism data object to better support extensions.


## 5.15.0 (3/21/2018)

### Added
- DP-6181: Add contact name to email and phone number links in contacts to be announced by screen readers along with the email address and phone number within the links. So, AT device users could have more clarity for what the email address or phone number is for.
- DP-6522: Adds new components and modifies existing ones to enable generalized listings of content, and specifically allows lists of user bios. Adds support for individual user bio pages.
- DP-6883: Add icon.function.php to pull svg icon source from /assets/svg-icons/ instead of the twig templates in @atoms/05-icons/.
- DP-8000: Adds new blocks to table-of-contents.twig and created new molecule twig expandable-sections.twig.
- DP-8290: Adds optional clearAll button to PressFilters for mayflower-react


### Changed
- DP-6883: Replace a call for svg icon templates with the new icon function for document download. The other icons continue to be rendered with the existing twig templates in @atoms/05-icons/.
- DP-7564: Changed Mayflower templates used for the Featured Items Mosaic component on Organization Landing Pages. This change should not impact any existing functionality, since the related component is not yet in use.
- DP-7963: Breaks out a contact item from a contact group and provides binder and info details related twig blocks to be overridden in implementation.
- DP-7976: Adds block to twig so we can override how link list decorative link is rendered.

### Fixed
- DP-8023: Block and conditional logic updates for info details
- DP-8203: Fix header alert to be displayed in its given space
- DP-8203: Remove accordion button in side column contact

### Removed
- DP-8190: Remove the background color from the iframe container
- Remove unused data for decorative links in link list pattern, and set the title for see all link.
- Remove sidebarHeading block renders sidebarHeading as an option of compHeading (back port mayflower-react)

## 5.14.0 (2/28/2018)


### Added
- DP-7786: Added: atoms/buttons/button-toggle as a new pattern, and inline, small modifiers for label. #711 #712
- DP-2082: [a11y] Add intuitive info to the + symbols for accordion buttons  #687
  - make screen readers not announce the + button in contact accordion
  -  add accordion status announcement with aria-label
- DP-7063: Added SVG Chat icon #664
- (For dev and release masters:) Added change log for the PR process #708 #715
- DP-7624: binder cover page components #698
  - New Organism variation "illustrated-header~inverted"
  - New Organism "table-of-contents-hierarchy"
  - New Content Type "binder-page"

### Changed
- DP-6352: [a11y] change tell us what you think button on all pages to be last item to get keyboard focus #678
- DP-3222-3914: [a11y] heading levels adjustment for imagePromo items #682
- DP-6351: [a11y] Change pagination on location listing to be heading #679
- DP-6350: [a11y] Change search query field place holder text in location #683
- DP-2405: Change the container for an abbreviation in a page banner title to <abbr> from <span> #688

### Fixed
- DP-6712: Fix the Video Dimensions on the Service Detail Page #674
- DP-1553: [a11y] Correct aria role value #699
- DP-2403: [a11y] Text info for the social media icons in the footer #691


### Removed
- DP-3198: a11y Keyboard focus indicator usability for main menus #676
  - Removed the poor supported aria-controles from the main navigation tabs to remove the non-functional keyboard instruction in JAWS with Firefox.
- DP-3252: [a11y] Remove IDs from svg icons #681

## 5.13.0 (2/16/2018)

### Changed
- DP-7907: Adds support for details to  [@molecules/callout-link](https://mayflower.digital.mass.gov/?p=molecules-callout-link-with-details&view=c) (e.g calls to action on a location page header). This includes adding an eyebrow, white theme variant, time note, and emphasized text to the callout link molecule. #703

### Added

- DP-7307 & DP-7483: organization image links #670
    - Add logo link molecule & logo list organism for use on service page
    - Add block
    - Adding accordion behaivor to image link lists

### Fixed

- DP-7307 & DP-7483: organization image links #670
    - relative pathing so things work everywhere
    - remove borders when logo list is in sidebar, align left text & images when no image present for some links
    - rename logoLink to imageLink, add variant for block treatment
    - fix indentation, spacing
    - adjust accordion toggle for various length of items

## 5.12.4 (2/13/2018)

### Fixed
- (For release masters:) `sed` from bash script on macos is not being very kind.  Iterating on the release script again.

## 5.12.3 (2/13/2018)

### Fixed
- (For release masters:) Touch up release docs and iterate on s3 deploy scripts for smoother release.

## 5.12.2 (2/8/2018)

### Fixed
- (For release masters:) Touch up release docs and iterate on s3 deploy scripts for smoother release.

## 5.12.1 (2/8/2018)

### Fixed
- (For devs) Iterate on the release process to make it more smooth.

## 5.12.0 (2/7/2018)

### Changed
- DP-7718: Adds support for Description text to [@molecules/callout-link](https://mayflower.digital.mass.gov/?p=molecules-callout-link-as-description&view=c) (e.g calls to action on a location page header).
- D-7725: Adds Support for Blue Variant of [@atoms/colored-heading](https://mayflower.digital.mass.gov/?p=atoms-colored-heading-blue&view=c) (e.g. header in the press filter organism)

## Fixed
- DP-7359: Make line breaks on word in [richtext](https://mayflower.digital.mass.gov/?p=organisms-rich-text) links compatible with non-chrome browsers.
- DP-7490: Adjust the [page banner](https://mayflower.digital.mass.gov/?p=organisms-page-banner-as-overlay) and its children for flexble height.

## Added
- (For Devs): Adds shell scripts and circle config to deploy feature branches and production tags to mayflower.digital.mass.gov [s3 bucket|https://github.com/massgov/mayflower/blob/dev/docs/s3-architecture.md] AND to publish static assets on [NPM|https://www.npmjs.com/package/@massds/mayflower]. See new [release process|https://github.com/massgov/mayflower/blob/dev/docs/release.md]

## 5.11.0 (2/5/2018)

### Changed
- DP-7478 - Page based alerts can now span multiple rows as needed.
- DP-7193 - Contact Accordians now have a more flexible layout for better experience on wider widths.

### Added
- DP-7265 - Add new 'Mosaic Grid' organism with 'Featured Item' molecules for use on ['Organization Elected Official' pages](https://mayflower.digital.mass.gov/?p=pages-organization-elected-official).

## 5.10.1 (1/3/2018)

### Changed
- DP-7252 - We've made the ajax pattern respect cache (i.e. the get request no longer appends a cache busting querystring "_=<timestamp> parameter).

## 5.10.0 (12/13/2017)

### Added
- DP-5817 - Give a warm welcome our newest Mayflower page type: [Rules of Court](https://mayflower.digital.mass.gov/?p=pages-rules-of-court).  This page can be used by legal professionals to publish court rulings, standing orders, and evidence guides.  Notice the new optional javascript functionality added to the [rich text](http://mayflower.digital.mass.gov/?p=organisms-rich-text&view=c) pattern to provide heading indentation and anchor links (as seen on the [Rules of Court](https://mayflower.digital.mass.gov/?p=pages-rules-of-court) page).  Also note the new accordion functionality added to the [listing table](http://mayflower.digital.mass.gov/?p=molecules-listing-table) pattern (as seen on the [Rules of Court](https://mayflower.digital.mass.gov/?p=pages-rules-of-court) page).
- DP-5991 - We've added an event page with [Public Meeting Notice](https://mayflower.digital.mass.gov/?p=pages-event-public-meeting) functionality: posted/updated information, public testimony callout, agenda, minutes, and participating organizations.  Related, we've also added a full page display for [event minutes](https://mayflower.digital.mass.gov/?p=pages-event-public-meeting-minutes) and [event agendas](https://mayflower.digital.mass.gov/?p=pages-event-public-meeting-agenda).
- DP-6517 - We've added a nifty new pattern to our family: [Ajax Pattern](https://mayflower.digital.mass.gov/?p=organisms-ajax-pattern&view=c). With this pattern, you can render dynamic content in any existing Mayflower pattern client side with the help of the TwigJS library. Read the [pattern docs](https://mayflower.digital.mass.gov/?p=organisms-ajax-pattern&view=c) to learn more and see it in action on the [Park Location page](https://mayflower.digital.mass.gov/?p=pages-location-park-content&view=c) -- the site and page alerts are all rendered using this new pattern!

### Changed
- DP-5916 - We've increased the vertical spacing between the phone number and description on the [Image Promo](http://mayflower.digital.mass.gov/?p=molecules-image-promo-with-map-link&view=c) pattern as it appears on [location listing pages](http://mayflower.digital.mass.gov/?p=pages-location-listing).
- DP-6916 - We've fixed the bug where long sidebar contact "learn more" links (i.e. on [How To pages](http://mayflower.digital.mass.gov/?p=pages-howto) were being hyphenated.

### Migrate Path
- DP-5817 - To implement this new page type, follow the [content type template pattern](https://mayflower.digital.mass.gov/?p=templates-court-rules&view=c).  Note the [backwards compatible extension of the listing table molecule](https://github.com/massgov/mayflower/pull/651/files#diff-831775c0ca12ca6116f93daaa9958ee0R7) to provide accordion function using the existing accordion js module and the [extension of the rich text organism](https://github.com/massgov/mayflower/pull/651/files#diff-085d4a2070c5f2bff38e4817c382b3beR4) (and new [JS](https://github.com/massgov/mayflower/pull/651/files#diff-e8d7776e501f946139bb194df89bef71R10)) to add "outline" indentation and heading anchor links.
- DP-5916 - You'll get [this style patch (from PR#645)](https://github.com/massgov/mayflower/pull/645/files) just by updating your css files!
- DP-5991 - See the [event content template](http://mayflower.digital.mass.gov/?p=templates-event&view=c) for instructions on implementing this new pattern variation.
- DP-6517 - Follow the [usage guidelines in the pattern docs](https://mayflower.digital.mass.gov/?p=organisms-ajax-pattern&view=c) to implement this new client side rendering feature.  See [an example implementation](https://github.com/massgov/mayflower/pull/644/files#diff-6619abb22969d972a21c93eb45ce97beR3) with a data transform function.
- DP-6916 - You'll get [this style patch (from PR#646)](https://github.com/massgov/mayflower/pull/646/files) just by updating your css files!

## 5.9.1 (11/29/2017)

Bump version to appease the automation Gods.

## 5.9.0 (11/28/2017)

### Added
- DP-5385 - The [Suggested Pages](http://mayflower.digital.mass.gov/?p=organisms-suggested-pages) pattern (i.e. Related Locations) now includes an optional more link so that it can be implemented to only render 3 entries and link to the rest.
- DP-5858 - Styles have been added which hide the "Tell us what you think" button and ensure that contact accordions are expanded when a page is printed.
- DP-6111 - Event teaser listings now have a ["no event" state](http://mayflower.digital.mass.gov/?p=organisms-event-listing-past-as-grid) which will render when the pattern is included on a page but no future events are provided.

### Changed
- DP-4534 - The [header tags](http://mayflower.digital.mass.gov/?p=molecules-header-tags) molecule (i.e. relationship indicators) has been updated to support 3+ tags by adding a show/hide button to collapse and expand the tags.
- DP-4572 - The dateline (i.e. BOSTON -) style on a press release page has been updated to be bold with an emdash appended.
- DP-5388 - The page banner on a Service Page will now fit longer text content (i.e. up to 400px in height).
- DP-5515 - [Service](http://mayflower.digital.mass.gov/?p=pages-service) and [Org](http://mayflower.digital.mass.gov/?p=pages-organization) page "action finder" titles (i.e. What would you like to do?) have been updated to sentence case.
- DP-5518 - The style for the feedback form (i.e. Did you find what you're looking for) textarea is more consistent when a user clicks yes / no.
- DP-5523 - When appearing consecutively (i.e. on a [Service Page](http://mayflower.digital.mass.gov/?p=pages-service) the grey background of the second "action finder" (i.e. What you need to know) will line up more consistently with the first.
- DP-5914 - The spacing has been fixed on [Topic page Section links](http://mayflower.digital.mass.gov/?p=pages-topic) (i.e. Topic cards) which display Callout links (i.e. links to Services).
- DP-6106 - The mobile styling for the banner on [Topic pages](http://mayflower.digital.mass.gov/?p=pages-topic&w=350px) has been made more consistent to other page banners: the height is flexible, the content is vertically centered, the icon removed, and the colored background fills the width of the screen.

### Removed
- DP-3060 - The outline has been removed from the Heading which appeared when a [How-To](http://mayflower.digital.mass.gov/?p=pages-howto) subnav anchor link (i.e. "Next Steps") is clicked.
- DP-5914 - Remove extra padding on callout links

### Migrate Path
- DP-5385 - To use the new more link for Suggested Pages, populate the optional `suggestPages.more` property with the data for a Link pattern.
- DP-4572 - To apply this style fix, wrap your press release dateline (i.e. BOSTON) text in `span.ma__rich-text__flame`. (See [massgov/mass PR #1304](https://github.com/massgov/mass/pull/1304/files))
- DP-5515 - The title text for "action finders" (i.e. What you need to know) are configurable, so just update your implementation to use sentence case to meet our styleguide standards!
- DP-6111 - To use the new "no events" state for a listing of Event Teasers (i.e. on Org pages), populate the `eventListing.emptyText` and `eventListing.pastMore` properties and leave `eventListing.events` array empty. (See [massgov/mass PR #1443](https://github.com/massgov/mass/pull/1443/files))

## 5.8.1

#### Added
- DP-4717 - Devs can use the new technical docs which describe the process for [working with patterns](https://github.com/massgov/mayflower/blob/dev/.github/CONTRIBUTING.md#creating-or-editing-a-pattern) and [atomic design](https://github.com/massgov/mayflower/blob/dev/docs/atomic-design.md).

#### Fixed
- DP-6145 Fix icon overlap bug in time callout organism
- DP-5915 Fix section links component by updating line height and increasing margin top on list items (except first one).
- DP-4517 - The [@molecules/header-tags](http://mayflower.digital.mass.gov/?p=molecules-header-tags) pattern no longer forces Title/Upper case for its contents.  (This will fix the case of the relationship indicators on Mass.gov).


## 5.8.0

### Thanks!

We want to give a quick shout out and thanks to all of our friends who have helped to get Mayflower to where it is today through there contributions over the last year: @jasonstanbery, @reenybeeny, @iansholtys, @labbydev, @nstriedinger, @lukewertz, @gleroux02, and @plusjeff.

And a special warm thanks to our largest contributor by far, @legostud, for all of the thoughtfulness, care, and ingenuity with which you've crafted this project!

We hope to see you all around in code. :)

### Added

- DP-4968 - The [Location page](http://mayflower.digital.mass.gov/?p=pages-location-general-content) now supports a "Downloads" section which could be helpful for adding a pdf map, for example.
- DP-4581 / 5023 - We've added sort and filter functionality to the [Event Listing](http://mayflower.digital.mass.gov/?p=pages-event-listing) page! Now you can enter a town or zip to sort events by proximity and you can filter events by a future date time frame.  (Also, developers will notice that the Event and Location listing js is shared, since the functionality is so similar.) ([PR #589](https://github.com/massgov/mayflower/pull/589))
- DP-5341 - We've created a new pattern called [Collapsible Content](http://mayflower.digital.mass.gov/?p=organisms-collapsible-content)!  Eventually this pattern could be used for functionality like [Contact Us as accordion](https://mayflower.digital.mass.gov/?p=molecules-contact-us-collapsed-with-more-link) where it will accept child patterns using the `path / data` construct similar to Rich Text, sidebar widgets, etc. ([PR #581](https://github.com/massgov/mayflower/pull/581))
- DP-4323 / 4325 - We've finished documenting all the patterns! (PRs [#545](https://github.com/massgov/mayflower/pull/545), [#546](https://github.com/massgov/mayflower/pull/546)).

### Changed

- DP-5307 - In response to some Mass.gov content author feedback, Users will notice that the [image + map banner (i.e. the Location Banner)](http://mayflower.digital.mass.gov/?p=organisms-location-banner) on the [Location page](http://mayflower.digital.mass.gov/?p=pages-location-general-content) has been made more narrow and fits within the page content width constraints.  This allows for a more convenient image size (of 800x400) to be used. ([PR #576](https://github.com/massgov/mayflower/pull/576))
- DP-3222 / 3914 - Several Mayflower patterns now support optional configuration for their included heading element levels.  (Technical note: This work compensates for the fact that many assistive technologies are not quite up to date with the HTML spec which we have been following all along) ([PR #590](https://github.com/massgov/mayflower/pull/590))
- DP-4318 - Users will notice that the font size for links in the sidebar are more consistent.  (See example on the ["Social" and "Offered By" on the Service page](http://mayflower.digital.mass.gov/?p=pages-service)). ([PR #588](https://github.com/massgov/mayflower/pull/588))
- DP-5653 - Our [Location listing](http://mayflower.digital.mass.gov/?p=pages-location-listing) and [Event listing](http://mayflower.digital.mass.gov/?p=pages-event-listing) page geosort functionality is now 8 times more cost effective (from 2 api credits down to .25 api credits!) ([PR #602](https://github.com/massgov/mayflower/pull/602))
- DP-3763 - Users will notice that the zoom level has been set to a more appropriate level on maps which have only 1 marker (i.e. on the [Location page (general content)](http://mayflower.digital.mass.gov/?p=pages-location-general-content)). ([PR #604](https://github.com/massgov/mayflower/pull/604))
- DP-5234 / 5177 - We've made some backwards-compatible updates to several patterns.  See [PR #571](https://github.com/massgov/mayflower/pull/571) for details.
- Github #565 - Devs will notice that we've updated some npm packages. ([PR #565](https://github.com/massgov/mayflower/pull/565))

### Removed

- DP-4313 - Users will notice that the logo image has been removed from the [Service page](http://mayflower.digital.mass.gov/?p=pages-service). ([PR #596](https://github.com/massgov/mayflower/pull/596))
- DP-4858 - Users will notice that the "DRAFT" status indication has been removed from the front end of the [Decision page](http://mayflower.digital.mass.gov/?p=pages-service). ([PR #597](https://github.com/massgov/mayflower/pull/597))

### Migrate Path

- DP-4968 - To use this new "Downloads" section feature on the Location page, populate `mainContent.formDownloads`, include the respective jumplink" in `stickyNav.anchorLinks` wherever you build the Location page data structure, and update your Location page level templating to `include @organisms/by-author/form-downloads.twig`! (See [PR #587 files](https://github.com/massgov/mayflower/pull/587/files))
- DP-5307 - Ensure that the images being used for `locationBanner.bgNarrow` are 800x400 as this is now the only image which will render.  (See work tracked in massgov/mass [PR #1188](https://github.com/massgov/mass/pull/1188))
- DP-3222/3914 - To use this new heading level config feature, set the optional heading levels for page patterns where you implement page level templating. (See work tracked in massgov/mass [PR #1157](https://github.com/massgov/mass/pull/1157))
- DP-4313 - To remove the logo from your Service page implementation, simply do not send data in `introSidebar.logo` wherever you do your page level data structuring for this page type. (See [PR #596 files](https://github.com/massgov/mayflower/pull/596/files))
- DP-4858 - To remove the visual DRAFT status from your Decision page implementation, simply do not send data in `pageHeader.publishState` wherever you do your page level data structuring for this page type. (See [PR #597 files](https://github.com/massgov/mayflower/pull/597/files))
- DP-5234/DP-5177 - We did our best to make these updates backwards compatible, which should mean that you don't need change anything.  You can check [PR #571](https://github.com/massgov/mayflower/pull/571/files) for details and also track tests for Mass.gov in [PR# 1386](https://github.com/massgov/mass/pull/1386)
- Github [#565](https://github.com/massgov/mayflower/pull/565) - Delete `styleguide/npm_modules` and run `npm install`


## 5.7.2

### Added

### Changed

- DP-5466 - Users can now enter in a zip or town in the town/zip location listing filter and press enter (i.e. without selecting an item from the autocomplete dropdown) AND select an autocomplete item from teh drop down to sort locations.

## 5.7.1

### Added

### Changed

- DP-5466 - Users can now enter in a zip or town in the town/zip location listing filter and press enter (i.e. without selecting an item from the autocomplete dropdown) to sort locations.

### Removed

### Migration path

## 5.7.0

### Added

- DP-4730 - Users will now notice there is now an option to render an [Event page with an end date](http://mayflower.digital.mass.gov/?p=pages-event-end-date). ([PR #566](https://github.com/massgov/mayflower/pull/566))
- DP-4881 - The [Press release page](http://mayflower.digital.mass.gov/?p=pages-press-release) now renders with (optional) subtitle content. ([PR #556](https://github.com/massgov/mayflower/pull/556))
- DP-3235 - Screen reader users are now informed of the [download link](http://mayflower.digital.mass.gov/?p=molecules-download-link) file size. ([PR #522](https://github.com/massgov/mayflower/pull/522))
- DP-3234 - Screen reader users are now informed of a page's category (i.e. Decision, Regulation) in [the context of the page title](http://mayflower.digital.mass.gov/?p=organisms-page-header).  (See also [`@organisms/by-template/illustrated-header`](http://mayflower.digital.mass.gov/?p=organisms-illustrated-header), [PR #509](https://github.com/massgov/mayflower/pull/509))
- DP-3232, 1369 - Screen reader users can now associate key actions link content with their respective heading content.  Also, there is now a [variant to the Comp heading](http://mayflower.digital.mass.gov/?p=atoms-comp-heading-as-sidebar-heading) which renders styled as a Sidebar Heading. ([PR #518](https://github.com/massgov/mayflower/pull/518))
- DP-5175 - A "more" link will now render on different sections of [Service](http://mayflower.digital.mass.gov/?p=pages-service) and [Service Detail](http://mayflower.digital.mass.gov/?p=pages-detail-for-service-howto-location) pages. ([PRs #570](https://github.com/massgov/mayflower/pull/570), [#551](https://github.com/massgov/mayflower/pull/551))
- DP-4591 - A "learn more" link has been added to the [contact us molecule](http://mayflower.digital.mass.gov/?p=molecules-contact-us-collapsed-with-more-link), as seen on [How-To pages](http://mayflower.digital.mass.gov/?p=pages-howto) which can provide a link to learn more about an organization referenced by a contact. ([PR #542](https://github.com/massgov/mayflower/pull/542))
- DP-4508 - A new component ([content eyebrow](http://mayflower.digital.mass.gov/?p=organisms-content-eyebrow)) i.e. "relationship indicators") has been created and added to pages that use [illustrated header](http://mayflower.digital.mass.gov/?p=organisms-illustrated-header) (i.e. [guides](http://mayflower.digital.mass.gov/?p=pages-guide)) and [page banner](http://mayflower.digital.mass.gov/?p=organisms-page-banner-as-columns) (i.e. [topic pages](http://mayflower.digital.mass.gov/?p=pages-topic) and [services](http://mayflower.digital.mass.gov/?p=pages-service)). ([PR #539](https://github.com/massgov/mayflower/pull/539))
- DP-3909 - [Tabular data](http://mayflower.digital.mass.gov/?p=organisms-tabular-data) (i.e. Fees) can now have an optional text description, as seen on the [How-to page](http://mayflower.digital.mass.gov/?p=pages-howto). ([PR #538](https://github.com/massgov/mayflower/pull/538))
- DP-4211 - We created a new [iframe](http://mayflower.digital.mass.gov/?p=atoms-iframe) pattern. (PRs [#510](https://github.com/massgov/mayflower/pull/510), [#574](https://github.com/massgov/mayflower/pull/574))

### Changed

- DP-1900 - Contact address "Directions" (i.e. in [page header organism as seen on Location Pages](http://mayflower.digital.mass.gov/?p=organisms-page-header-for-location) links now remain on one line; fixed for Firefox browser. ([PR #543](https://github.com/massgov/mayflower/pull/543))
- DP-3189 - The details of a piece of contact information (i.e. the hours of operation for a phone number) are now easier to read (i.e. stronger, italics removed). ([PR #512](https://github.com/massgov/mayflower/pull/512))
- DP-4311 - The content for the [Org. Landing Page](http://mayflower.digital.mass.gov/?p=pages-organization) "finder" subheadings in Mayflower are now service-oriented ([PR #540](https://github.com/massgov/mayflower/pull/540))
- DP-4103 - Card titles on Topic page cards are now properly aligned when using the IE 11 browser. ([PR #526](https://github.com/massgov/mayflower/pull/526))
- DP-3195 - Visitors navigating using a keyboard will have an easier time keeping track of their cursor focus through the [main navigation pattern](http://mayflower.digital.mass.gov/?p=molecules-main-nav). ([PR #495](https://github.com/massgov/mayflower/pull/495))
- DP-4195 - When a visitor uses Google translator the [callout links](http://mayflower.digital.mass.gov/?p=molecules-callout-link) boxes will render correctly. ([PR #535](https://github.com/massgov/mayflower/pull/535))
- Fix typos and adhere to style guide ([PRs #549](https://github.com/massgov/mayflower/pull/549), [#563](https://github.com/massgov/mayflower/pull/563), [#562](https://github.com/massgov/mayflower/pull/562), [#561](https://github.com/massgov/mayflower/pull/561), [#560](https://github.com/massgov/mayflower/pull/560)).
- DP-4877 - Vertical spacing between multiple signees for press release has been increased. ([PR #555](https://github.com/massgov/mayflower/pull/555))
- DP-3228 - Accordion functionality (as seen in [Emergency Alerts](http://mayflower.digital.mass.gov/?p=organisms-emergency-alerts) and mobile [Section Links](http://mayflower.digital.mass.gov/?p=organisms-section-links) now properly announce their open/closed state to screen reader users. ([PR #499](https://github.com/massgov/mayflower/pull/499))
- DP-5394 - Location listings functionality works in IE11 ([PR #580](https://github.com/massgov/mayflower/pull/580))

### Removed
- DP-4480 - The filter for the [action finder](http://mayflower.digital.mass.gov/?p=organisms-action-finder) has been removed (as seen on [Service pages](http://mayflower.digital.mass.gov/?p=pages-service)).  Soon, when there are +6 links, "More" links will render to replace this functionality.  ([PR #536](https://github.com/massgov/mayflower/pull/536))

### Migrate path

- DP-4730 - To use this new end date feature, update [`@molecules/event-teaser.twig`](https://github.com/massgov/mayflower/blob/dev/styleguide/source/_patterns/02-molecules/event-teaser.twig) by adding the `raw|nl2br` filters to the `eventTeaser.date.summary` variable as seen in [PR #566](https://github.com/massgov/mayflower/pull/566/commits/e7568e32d5f7005b82ca0c2eb980ee9a57d1b3b1).
- DP-3235 - To use this new accessibility feature, update `@molecules/download-links.twig` with the visually hidden span element as seen in [PR #522](https://github.com/massgov/mayflower/pull/522/files).
- DP-3234 - To use this new accessibility feature, update `@organisms/by-tempate/page-header`, `@organisms/by-template/illustrated-header` with visually hidden span and aria-hidden attribute; and populate the `prefix` or `category` variable as seen in [PR #509](https://github.com/massgov/mayflower/pull/522/files).
- DP-3232, 1369 - To use this new accessibility feature, populate the `keyActions.compHeading.id` variable and add the 'aria-labelledby' property to [`@organisms/by-author/key-actions`](http://mayflower.digital.mass.gov/?p=organisms-key-actions) as seen in [PR #518](https://github.com/massgov/mayflower/pull/518/files).  To use the new feature which renders a sidebar set `compHeading.sidebar` to `true` and add the conditional block to the top of [`@organisms/by-author/key-actions`](http://mayflower.digital.mass.gov/?p=organisms-key-actions) as seen in [PR #518](https://github.com/massgov/mayflower/pull/518/files).
- DP-3195 - To use this new accessibility feature, add the tabindex to the [@molecules/main-nav](http://mayflower.digital.mass.gov/?p=molecules-main-nav) pattern as seen in [PR #495](https://github.com/massgov/mayflower/pull/495).
- DP-4195 - To get this fix, update [`@molecules/callout-link`](http://mayflower.digital.mass.gov/?p=molecules-callout-link) as seen in [PR #535](https://github.com/massgov/mayflower/pull/535).
- DP-5175 - To get this new "more" link functionality for link list and form downloads, populate the `linkList.more` and `formDownloads.more` variables and update the [`@organisms/by-author/link-list`](http://mayflower.digital.mass.gov/?p=organisms-link-list) and [`@organisms/by-author/form-downloads`](http://mayflower.digital.mass.gov/?p=organisms-form-downloads) templates as seen in [PR #551](https://github.com/massgov/mayflower/pull/551/files).
- DP-4591 - To use this new contact us "learn more" link functionality, populate the `contactUs.decorativeLink` variable and update [`@molecules/contact-us`](http://mayflower.digital.mass.gov/?p=molecules-contact-us) as seen in [PR #542](https://github.com/massgov/mayflower/pull/542/files).
- DP-4508 - To use this new component, populate the `contentEyebrow` variable and create [`@organisms/by-template/content-eyebrow`](http://mayflower.digital.mass.gov/?p=organisms-content-eyebrow) as seen in [PR #539](https://github.com/massgov/mayflower/pull/539/files).
- DP-3909 - To use this new description feature, populate the `tabularData.description` variable and update [`@organisms/by-author/tabular-data`](http://mayflower.digital.mass.gov/?p=organisms-tabular-data) as seen in [PR #538](https://github.com/massgov/mayflower/pull/538/files).
- DP-3228 - To use this accessibility fix, update the [`@molecules/button-alert`](http://mayflower.digital.mass.gov/?p=molecules-button-alert) [`@organisms/by-template/emergency-alerts`](http://mayflower.digital.mass.gov/?p=organisms-emergency-alerts) and [`@molecules/section-links`](http://mayflower.digital.mass.gov/?p=organisms-section-links) patterns as seen in [PR #499](https://github.com/massgov/mayflower/pull/499/files).

## 5.6.1

## Added

## Changed
- For developers - update the deploy script to not require an asset path by default for a prod or fork deploy and to not set the default to mayflower/assets for prod releases.

## Removed

## 5.6.0

### Added
- DP-4181 - Folks browsing through the repository will notice new documentation which explains how to get set up, develop, and make other contributions to Mayflower!  This documentation is linked from the [shiny new repo readme](https://github.com/massgov/mayflower). ([PR #532](https://github.com/massgov/mayflower/pull/532))
- DP-4053 - Developers can now follow a documented build + deploy process to ship their code to their own GitHub Pages where their work can be seen and tested! This documentation is linked from the [shiny new repo readme](https://github.com/massgov/mayflower). ([PR #530](https://github.com/massgov/mayflower/pull/530))
- DP-4046 - The change above is possible because we can now host Mayflower from a subdirectory (i.e. <myname>.github.io/mayflower)! ([PR #503](https://github.com/massgov/mayflower/pull/503))
- DP-4080 - Developers, reviewers, and release managers can (and should!) now follow documentation on Semantic Versioning as it applies to Mayflower.  This means we have guidelines to help reviewers understand what kind of change the code they are reviewing is and to help release managers understand what kind of version of Mayflower they are releasing. This documentation is linked from the [shiny new repo readme](https://github.com/massgov/mayflower). ([PR #504](https://github.com/massgov/mayflower/pull/504))
- We documented all the things!  Well, almost all. :)  Check out patterns used on [Service](http://mayflower.digital.mass.gov/?p=pages-service), [How-To's](http://mayflower.digital.mass.gov/?p=pages-howto), [Guides](http://mayflower.digital.mass.gov/?p=pages-guide), [Locations](http://mayflower.digital.mass.gov/?p=pages-location-park-content), [Topics](http://mayflower.digital.mass.gov/?p=pages-topic), and [Events](http://mayflower.digital.mass.gov/?p=pages-event) and prepare ready to be informed! (Remember you can navigate to child patterns by clicking links down in the "Lineage" section.)  More goodness coming soon. (PRs [#521](https://github.com/massgov/mayflower/pull/521), [#523](https://github.com/massgov/mayflower/pull/523), [#524](https://github.com/massgov/mayflower/pull/524), [#527](https://github.com/massgov/mayflower/pull/527), [#529](https://github.com/massgov/mayflower/pull/529), [#533](https://github.com/massgov/mayflower/pull/533))

### Changed
- Outside contribution from @sghoweri - Developers will notice that we now use a fork of Pattern Lab maintained by a Drupal Pattern Lab GitHub organization, with hopes of innovating, and iterating on Pattern Lab and merging changes back upstream to the main Pattern Lab fork.

  This also allows us to see pattern inheritance: browse to a pattern, click the cog icon in the top-right corner, click show pattern info, and see where else patterns are used and which child patterns a given pattern contains. (PRs [#488](https://github.com/massgov/mayflower/pull/488) and [#519](https://github.com/massgov/mayflower/pull/519))  Thanks Salem!
 - Outside contribution from @evanlovely - Developers will notice an improvement to the automatic  build + browser reload during local development. ([PR #506](https://github.com/massgov/mayflower/pull/506)) Thanks Evan!
- Developers will notice standardization on a pattern for writing pattern modification classes, this accounts for nearly all of the backwards-compatible `.twig` changes in this release.
- Developers and implementers will notice that [`@molecules/footnote`](http://mayflower.digital.mass.gov/?p=molecules-footnote) now has an option to render as plain text (as seen in Mass.gov Regulation pages, etc.) ([PR #541](https://github.com/massgov/mayflower/pull/541))
- Contribution from our very own @meghandavis - See that typo on the [Press Listing page](http://mayflower.digital.mass.gov/?p=pages-press-listing)?  Nope.  That's because it's fixed!  Thanks Meghan!!

### Removed
- DP-4603 - For developers, the `phing deploy`  task which circle kicks off to deploy to `massgov/mayflower-artifacts` no longer writes to `env.js` (since it's been removed) to set a theme path for js.  ([PR #544](https://github.com/massgov/mayflower/pull/544))  Implementers should do this work in their site codebase.  See an example of this at [Mass.gov PR #1065](https://github.com/massgov/mass/pull/1065)

### Migrate path

- See note for DP-4603 above for steps to implement this change.

## 5.5.0

Here comes another Mayflower release, hot off the summertime presses!  We've got 2 new page types and lots of little improvements and fixes coming your way.

 **JIRA fans can check out the [release tickets](https://jira.state.ma.us/projects/DP/versions/14642) for more information.*
 **Mayflower project consumers can take a look at PR's below to confirm, make, and test any markup changes introduced by this release prior to updating in production.*

### New Features
- New page type: [Board Decisions](http://mayflower.digital.mass.gov/?p=pages-board-decision), which is used for rulings, decisions and opinions issued by agency boards or individuals given the authority to decide specific matters. ([@pages/board-decision](http://mayflower.digital.mass.gov/?p=pages-board-decision), See [PR #494](https://github.com/massgov/mayflower/pull/494))
- We've also added an example [Form Page](http://mayflower.digital.mass.gov/?p=pages-form-page-example) to highlight form styles (projects likely implement forms using other services) (See [PR #490](https://github.com/massgov/mayflower/pull/490) - Markup)
- News ([@organisms/by-author/press-listing](http://mayflower.digital.mass.gov/?p=organisms-press-listing)) and events ([@organisms/by-author/event-listing](http://mayflower.digital.mass.gov/?p=organisms-event-listing)) are now surfaced on additional page types (See [PR #498](https://github.com/massgov/mayflower/pull/498) - Markup)

### Improvements
- We've added some keyboard functionality to our google map ([@molecules/googlemap](http://mayflower.digital.mass.gov/?p=molecules-google-map)) pattern (See [PR #489](https://github.com/massgov/mayflower/pull/489) - JS only)
- We've made the [Regulation page type](http://mayflower.digital.mass.gov/?p=pages-regulation)  more uniform to other "law" page types (See [PR #494](https://github.com/massgov/mayflower/pull/494) - Markup))

### Fixes
- The short description text on a [service detail](http://mayflower.digital.mass.gov/?p=pages-detail-for-service-howto-location) page banner ([@organisms/by-template/page-banner](http://mayflower.digital.mass.gov/?p=organisms-page-banner)) should render (See [PR #493](https://github.com/massgov/mayflower/pull/493))
- Assistive tech like screenreaders will now read callout stats ([@molecules/callout-stats](http://mayflower.digital.mass.gov/?p=molecules-callout-stats)) more naturally (See [PR #500](https://github.com/massgov/mayflower/pull/500) - Markup + CSS)
- Semantic search form ([@molecules/header-search]()) label and placeholder text are more understandable (See [PR #485](https://github.com/massgov/mayflower/pull/485) - Markup + demo content)

## 5.4.0
In this new minor release, we've introduced two new Law pages: Policy Advisory and Executive Order, along with several improvements and fixes.

**Projects implementing Mayflower should see the [release tickets](https://jira.state.ma.us/projects/DP/versions/14641) and confirm, make, and test any markup changes introduced by this release prior to updating in production.*

### New Features
- Created a [Policy Advisory](http://mayflower.digital.mass.gov/?p=pages-policy-advisory-directive) page type (`@pages/policy-advisory-directive`, `@templates/01-content-types/policy-advisory`) used for Directives, Letter Rulings, Administrative Procedures, Opinions, TIRs. (DP-3825)
- Created an [Executive Order](http://mayflower.digital.mass.gov/?p=pages-executive-order) page type (`@pages/executive-order.twig
`, touched `@molecules/image-promo.twig`, `@molecules/listing-table.twig`) (DP-3829)

### Improvements
- We now have a medium icon (`@atoms/05-icons/svg-medium`) available for patterns like the social media link lists (DP-3495)
- News items can now have an optional featured image (`@templates/01-content-types/press`) (DP-3831)
- Detail page (for service, how-to, location - `@pages/detail-for-service-howto-location`) has been updated: removed key actions, added video (`@atoms/09-media/video`) and map (`@organisms/by-author/mapped-locations`) (DP-3891)

### Fixes
- We've made "Directions" link text (`@molecules/contact-group`) more helpful for screen readers (DP-3227)
- Callout alert links (`@organisms/by-author/callout-alert`)  are now more semantic and accessible (DP-3236)
- The "Go to class Mass.gov" link no longer overlaps with the skip-to link (`@organisms/by-template/header`) for keyboard users (DP-3191)
- Sticky nav links (`@molecules/sticky-nav`) for location and location detail pages are now consistent (DP-3822)
- Inactive (i.e. clickable) sort buttons (`@atoms/01-buttons/button-sort`) now appear clickable, like a link (DP-3890)
-  Homepage > popular searches underline (`@organisms/search-banner.scss`) is now centered (DP-3895)
-  Background images on illustrated links (`@molecules/illustrated-link`) no longer repeats right edge (DP-4026)
- Long text renders in the sidebar correctly (`@atoms/content_link.scss`) (DP-2352)
- Page banner images (`@organisms/page_banner.scss`) will scale as large as possible (be zoomed out) to cover the page banner. (DP-4310)

## 5.3.0
We've added some functionality to the location listings organism ([@organisms/by-author/location-listing](http://mayflower.digital.mass.gov/?p=organisms-location-listing))!  You can sort, filter, and paginate listing results!

Note: The location listing organism is made up of lots of other patterns:
  - [@molecules/location-filters](http://mayflower.digital.mass.gov/?p=molecules-location-filters)
  - [@molecules/results-heading](http://mayflower.digital.mass.gov/?p=molecules-results-heading)
  - [@molecules/google-map](http://mayflower.digital.mass.gov/?p=molecules-google-map)
  - [@molecules/pagination](http://mayflower.digital.mass.gov/?p=molecules-pagination)
  - [@organisms/by-author/image-promos](http://mayflower.digital.mass.gov/?p=organisms-image-promos)

  And of course, you can still use those patterns in other components!

## 5.2.0

In this short-but-sweet minor release we add a new pilot logo to the header, create a new fixed call to action that floats left/right down at the bottom of the page (see: `@molecules/floating-action.md`), and fix a pesky bug that was centering many headings that should not have been centered.

## 5.1.0

To kick June off, there's a new Mayflower minor release. Announcements Listings and Events are the headliners, but lots of improvements make an appearance at the concert too.

For folks that want to see all the notes:
https://jira.state.ma.us/projects/DP/versions/14638

### NEW FEATURES

- Announcing all the things! Announcement Listing pages cover everything from press releases to speeches. Additionally, content on this page can be filtered by type, agency, topic, and other classifications.
- Event listings and event details for single instance events and those that recur.
- Directions link now appears after clicking on map pins
- All available activities at a location are now listed on Location pages
- Video description/transcript page has been added
- "Your Government" version of Topic pages now exist

### IMPROVEMENTS

- The main menu (at the top of all pages) is much more accessible with improved ordering if you're tabbing between links.
- Consistent spacing between patterns has been added.
- Southbridge location page had its banner coursel replaced with a banner image and Google map.
- Coloring and spacing fixes on the homepage.
- Wording and width adjusted on guides.
- Adjustments to the Location page, with some items removed (quick actions, breadcrumbs, wait times) and added (key actions, contact list).
- Key actions added to Location Park page.
- Details content type is more adaptive to different screen sizes.
- Small label/text changes and other tiny adjustments on Org, G2G, Section Landing, Topic Transition, Helpful Links, Service, Location, and Event Listin pages.

## 5.0.0

Sometimes you have to break a few eggs to make an Omlette.  For our next major release (5.0), we're introducing a new Announcement page type and had to change some existing code in progress.

**Note:** This bump from 4.* to 5.* is considered a major release, which means all of our friends who make their sites Mayflowery with this code should read on and integrate locally before updating anything in production.  If you're interested, you can see our integration test steps for Drupal in this [google doc](https://docs.google.com/document/d/1pbb-l0G39y9o8QMElxGzSi7nBBxDaV9k7hHdxmWAiaU/edit#).

### SUMMARY
If you'd like to see the tickets in JIRA:

- [DP-3167 [MF] News/Announcement Detail Page](https://jira.state.ma.us/browse/DP-3167)

### NEW FEATURES
- Mayflower now has a new Announcement Content Type and Page

### IMPROVEMENTS
1. Page Header
  a. Added Category field
  b. Added Social Icons pattern
2. Linked List
  a. removed v3.5 compatibility code
  b. Added optional eyebrow and date elements
3. Personal Message (breaking change)
  a. updated styling, html, json (Pilot version) to match designs for Announcement page
4. Footer (breaking change)
  a. Change data variable for socialLinks to footerSocialLinks
  b. moved custom styling for social links into the footer.scss file
5. Social Links
  a. Added optional label
  b. Added data attribute to record type of social icon (for JavaScript)
6. SVG Social icons
  a. now have a default color (fill value set on the path)
7. Header Tags (breaking change)
  a. Changed label to use JSON content
8. Image Promo
  a. Added missing height and width variables to image data
  b. Using image atom instead of img tag.
9. Video
  a. width and height variables were not coded correctly

## 4.2.0

### SUMMARY
If you'd like to read about these changes in JIRA:

* [DP-2956](https://jira.state.ma.us/browse/DP-2956) - 	[mf] Update "Pages" names on Mayflower to reflect internal language
* [DP-2977](https://jira.state.ma.us/browse/DP-2977) - [dev] Locations not displayed on service page
* [DP-2981](https://jira.state.ma.us/browse/DP-2981) - [mf] Fix style for time callout and downloads area in Guide sections
* [DP-2983](https://jira.state.ma.us/browse/DP-2983) - [mf] Sidebar headers appear when there is no sidebar information.
* [DP-3077](https://jira.state.ma.us/browse/DP-3077) - [MF] G2G Color Styles

### NEW FEATURES
We have a new color scheme for Gov to Gov pages and patterns!  Take a look under the new Pages > G2G dropdown!  Bonus: if you're on a different page, you can switch over to the G2G theme by typing "cranberry" into the header search and clicking "submit". :) (do this again to get back to the regular theme)

### IMPROVEMENTS
We updated the page patterns (see the Pages dropdown) to match our more generic page type names

### FIXED
As part of this release we fixed a few issues.

1. We fixed a bug where some addresses with special characters weren't showing up on maps.
2. Time callouts and downloads are now aligned with the rest of the page content, even when there is no sidebar content on the page or page section
3. We should no longer see any sidebar widget markup when there is no content for them.

## 4.1.0

### SUMMARY
If you'd like to read about these changes in JIRA:

* [DP-2042](https://jira.state.ma.us/browse/DP-2042) - [Pattern Lab] Location Listings
* [DP-2078](https://jira.state.ma.us/browse/DP-2078) - [dev] Update Interstitial Page Code
* [DP-2400](https://jira.state.ma.us/browse/DP-2400) - [a11y] Add more context to the linked text "Log in to..."
* [DP-2693](https://jira.state.ma.us/browse/DP-2693) - [dev] Update template to remove arrow in Activities
* [DP-2734](https://jira.state.ma.us/browse/DP-2734) - [Pattern Lab] Regulations
* [DP-2853](https://jira.state.ma.us/browse/DP-2853) - [dev] Contact section appears even when there is no additional contact added.
* [DP-2963](https://jira.state.ma.us/browse/DP-2963) - [Pattern Lab] Update color variable names
* [DP-3094](https://jira.state.ma.us/browse/DP-3094) - [mf] Update "Service Detail" page to match inputs on build specs
* [DP-3149](https://jira.state.ma.us/browse/DP-3149) - [mf] - Ordered Steps - remove number if only one step
* [DP-3151](https://jira.state.ma.us/browse/DP-3151) - [mf] - Rich Text - nested ordered list
* [DP-3152](https://jira.state.ma.us/browse/DP-3152) - [mf] - Image Promo - optional description
* [DP-3155](https://jira.state.ma.us/browse/DP-3155) - [mf] - Location Filters - Refactor layout to accommodate more tags

### NEW FEATURES

- Ahem... introducing the latest page type to our family: Regulation Details! (Pages > REG 930 CMR 6).  This is a great page type to use to make it easy to read information regarding a specific regulation.
- Wait there's more... We also created a new Service Detail Page (Pages > Service Details).  Services might give you the top level information, but this is where the real information is for a specific service.

### IMPROVEMENTS

1. We've revisited how we named our Sass color variables.  Instead of using $c-theme-blue for example we are now using $c-theme-primary.  This update will make it easy for others to create new color schemes for the Mayflower Patterns.
2. The Location Listing page (Pages > Map listing human services) has been updated from the MVP version to the final version.  The Filters area was expanded to include additonal choices.  The Results area was updated to include tags to show which filters are currently being applied along with pagination.  The Results are also using a newer design that highlights the active or hovered location and makes the corresponding map marker bounce.
3. For the Image Promo pattern, we've changed the description from being a required field to being an optional field.
4. After testing the transition page with low to no vision users, we identified that changing the message from a paragraph to an H1 tag was an added benefit.

### FIXED

As part of this release we fixed a few issues.

1. If a location didn't have any additional contacts the right rail contact us pattern was still showing the "Contacts" heading.  This pattern has been updated to check if it has contacts before rendering any html.
2. The Image Promo pattern was updated to check to check if the read more link has a "text" value before adding that link to prevent an empty link from being added.
3. When an Ordered Step pattern was added to a page with only one step, the number icon was still being shown and the html was being read as a list of one.  This pattern now checks the length of steps to render and only renders it as a numbered list if there are multiple steps.  Otherwise it just outputs a single Action Step item.
4. When a nested ordered list was added to a Rich Text pattern, the nested list items were also being rendered as numbers.  We've updated this to render letters instead.
5. The utility nav was having issue with accessibilty trying to understand the "login to..." link found in the utility nav.  A hidden element has been added to the link to provide more information that screen readers can see.

## 4.0.0

Mayflower turns 4.0.0!  Oh man.  We've been in the lab creating a new page type called How-To (formerly known as Action) and we've got lots of other ~candies~ updates and ~peeps~ goodies packed in to this ~easter basket~ release. :)

**Note:** This bump from 3.* to 4.* is considered a major release, which means all of our friends who make their sites Mayflowery with this code should read on and integrate locally before updating anything in production.  If you're interested, you can see our integration test steps for Drupal in this [google doc](https://docs.google.com/document/d/1pbb-l0G39y9o8QMElxGzSi7nBBxDaV9k7hHdxmWAiaU/edit#).

### SUMMARY
If you'd like to see the tickets in JIRA:

- [DP-2228 [pattern lab] How-to page updates](https://jira.state.ma.us/browse/DP-2228)
- [DP-2685 [mf] Add Tabular Fees module to How To Page](https://jira.state.ma.us/browse/DP-2685)

### NEW FEATURES
- Goodbye Action and hellooooooo How-To page.  Give her a spin at `Pages > HOWTO Unemployment`.
- That same left sticky nav that we all know and love in a How-To (Action) page is now it's own component. ;)  See `Molecules > Sticky Nav`
- We've got a nifty new list of contacts that can optionally be collapsed / expanded in an accordion, like in the main column of a How-To.  See `Organisms > By Author > Contact List`
- Since we were using it on a couple different page types, we created a Details template that contains the meat (or tofu) of the content area for How-Tos and Locations (they're similar in layout - remember right rail?!).  See `Templates > Content Types > Details`
- We now have a mobile-friendly pattern for data tables!  This new component displays as a table on wide screens and as a list on narrow screens.  See `Organisms > By Author > Tabular Data` - and remember you can change display size in pattern lab to see it change layout!

### IMPROVEMENTS
- We've renamed the Action Activities component to Image Promos (See `Organisms > By Author > Image Promos`).  This is a list of image promo molecules (See `Molecules > Image Promo`) that we see on location pages as recommended activities and on map listing pages.
- The Action Sequential List molecule has moved up in the world.  It's now called Steps Ordered and it's an organism!  This is the pattern that lists steps displayed as a numbered list.  See `Organisms > By Author > Steps - Ordered`
- Similarly, the Action Steps organism is now called Steps Unordered and it's got a new look!  This lists steps displayed as accordions that you can collapse and expand. See `Organisms > By Author > Steps Unordered`, `Molecules > Action Step` (with lots of variations!)
- We've made our downloads organism more flexible with an optional heading.  This allowed us to remove the Action Downloads molecule. We updated this new organism name to Form Downloads (replacing Form Download -- See `Organisms > By Author > Form Downloads`).  Finally, this organism includes several singular download link molecules.  See `Molecules > Download Link`.
- Finally, our Page Header organism (See `Organisms > By Template > Page Header`) is shiny like new!  It's still got the title and divider, but now you can also add some optional components to the sidebar (widgets) or under the Title and Sub Title (optional contents).  You can see this flexible pattern in action on the Org Page (`Pages > Org Landing Page`) -- it's all the content in white in between the page banner (title/image) and the action finder (What would you like to do?).

## 3.7.1
In this release of Mayflower, we're just stitching together a little patch with some TLC for the Topic page and also improving our accessibility.

### SUMMARY
Please feel free to check these tickets out in JIRA:

- [DP-2399](https://jira.state.ma.us/browse/DP-2399) The site name is not announced correctly in Voiceover
- [DP-2401](https://jira.state.ma.us/browse/DP-2401) The close button is announced as "close plus".
- Github #398 JavaScript Type Errors

### FIXED
- The site logo now introduces itself more accurately, as Mass.gov (instead of Mass gov which was mistaken for Mass Governor), to screen readers and other machines.
- The nifty little "X"  icon found on "close" buttons (think utility nav dropdown or mobile accordions for sub headings and cards) are now safely ignored by screen readers, since we already use text to describe the button.
- We squashed a pesky javascript bug that might have been preventing other javascript from running on the site. (perhaps functionality for a video or map wasn't loading)

## 3.7.0

### SUMMARY
We've updated the topic page!

If you'd like to read about this changes in JIRA:

* [DP-2117](https://jira.state.ma.us/browse/DP-2117) - [pattern lab] Topic Page Updates

### Improvements
* We've updated the Topic page! (Pages > Topic State Parks and Recreation) - and we're talking more than just a new name (no more L1's here!):
    * The new header layout includes a a spot for a description and a nifty new image size.
    * We've introduced some new variations to the card component (Molecules > Section Links) on the Topic Page:
        * You can now choose between regular links (by default) or callout links (Molecules > Section Links Callout Links).  This will help to call out How-To's and tasks associated with a service on a given topic page.
        * For those times when we don't want to fill the card up with too many links but we want people to know there are more goodies, we've add an optional more link to the bottom of the card.

## 3.6.0

### SUMMARY
If you'd like to read about these changes in JIRA:

* [DP-2114](https://jira.state.ma.us/browse/DP-2114) - [pattern lab] Service Page
* [DP-2181](https://jira.state.ma.us/browse/DP-2181) - Update Guide Page in Mayflower
* [DP-2206](https://jira.state.ma.us/browse/DP-2206) - Implement org page level structured data json+ld object in Mayflower
* [DP-2569](https://jira.state.ma.us/browse/DP-2569) - Change header in Service page
* [DP-2471](https://jira.state.ma.us/browse/DP-2471) - Mayflower: guide section with all possible elements

### NEW FEATURES
- Ahem... introducing the latest page type to our family: Services! (Pages > Service Unemployment Benefits).  This is a great page type to use to help surface tons of information related to services, including: branding information, instructional videos, links to how-to's, location information listings, etc.
- We're making Org Landing Pages (Pages > Org Landing Page) more machine and search friendly by adding a Government Organization structured data pattern (Meta > Schema > Government Organization) to the bottom of the page markup.
- For Mayflower implementers, we've created an example Guide page which shows all of the possible elements that can go into a Guide section (Pages > Guide Section Example)

### IMPROVEMENTS
- We've revisited the guide page with some updates.  We've consolidated the formerly 3 guide pages into one shiny new guide page with just those components that our content friends have identified as being pertinent:
  - removed the testimony component
  - alerts links are now optional
  - section key agencies are now optional
  - the related guides show the guide card treatment as opposed to the related pages image thumbnail treatment.

## 3.5.0

### DS-5
* DP-1307 - Display spacing issue in Agency Links area on subtopic (L2) pages
* DP-1734 - Word "Unemployment" not resizing correctly on Subtopic page on iPhone 5
* DP-1838 - Standardize on one icon for both internal and external links
* DP-1853 - Related Things - topics do not have the correct icon
* DP-2095 - SVG icons not being added properly to Rich Text links
* DP-2104 - Implement thumbnail scaling in PatternLab
* DP-2109 - Print Styles - Go to Classic Mass.gov appears at the top of every page, hiding text.
* DP-2110 - Print Styles - In Firefox, the Featured Topics menu has inches of margin on top and bottom

### DS-8
* DP-1370 - The keyboard focus on the "yes" and "no" radio buttons is barely visible on feedback form
* DP-1795 - Implement HIGH PRIORITY accessibility fixes from accessibility vendor SEE SUBTASKS
* DP-1849 - On location page, there are multiple links labeled "directions"
* DP-1878 - Fix focus when navigating by keyboard
* DP-1880 - Change focus style of "Go to classic Mass.gov" to be more visible
* DP-1881 - Focus indicator in top nav dropdowns is not visually clear enough
* DP-1893 - Modify alert show/hide code to use ARIA expanded

### Maintaince & Support
* DP-1995 - CLONE - Addresses in Contact Groups not showing all line breaks

## 3.4.2
* DP-1434 - Update location and design of feedback form

## 3.4.1
* Reset the gulp copy task to include the svg files

## 3.4.0 (Sprint 13)

### DS-5
* DP-1653 - Implement static MVP Map page in Patternlab
* DP-1670 - Remove static label "Guide:" from illustrated link
* DP-1673 - Size of cards varies in common actions, using Safari browser
* DP-1731 - Location icon cut off on home page on mobile
* DP-1763 - Stacked Row Icon Links - Text wrapping issue
* DP-1848 - Related Things - allow for org partners to highlight one or two actions
* DP-1996 - Google translate is only showing in Chrome & Safari browsers
* DP-2040 - Update language in Patternlab on Location Row

### Maintaince & Support
* DP-1434 - Update location and design of feedback form

## 3.3.0 (Sprint 12)

### DS-5
* DP-691 - Implement Google Translate in Pattern Lab
* DP-981 - PatternLab - Refactor header contact us
* DP-1535 - Modify topic nav in Pattern Lab in keeping with touch / desktop design update
* DP-1759 - Implement Location Row on Org Page in Patternlab
* DP-1737 - Key Actions - illustrated links don't grow in height
* DP-981 - PatternLab - Refactor header contact us
* DP-1264 - Header - Adding Back to Classic MG button
* DP-1264 - Patch for generalizing utility nav panels.

### DS-8
* DP-1367 - The "Top" button does not move keyboard focus to the top of the page.
* DP-1554 - The social media icons in the footer do not have appropriate alternative text.
* DP-1374 - The state of the Common Actions dropdown menu is not conveyed to screen readers.

### DS-23
* DP-1270 - Implement the structure data markup for location page type to mayflower

### Other
* DP-1521 - Interstitial page not displaying when clicking on common actions & guide links for topic and subtopic pages

## 3.2.2
* Fixes bump version bug

## 3.2.1 (Sprint 11)

### DS-5
* DP-1103 - Implement default file/download icon in Patternlab
* DP-976 - Implement topic funnel icons in Patternlab
* DP-686 - Design print styles for location pages
* DP-671 - Design print styles for organizational pages
* DP-644 - Design print styles for guides
* DP-658 - Design print styles for How-to pages

### DS-23 - External Search
* DP-1267 - Implement the structure data markup for page elements to mayflower

### DS-41
* DP-787 - Create Park Icons for Park Types, Activities, Users

### Bugs
* DP-1278 - [Action] Link & text alignment issue in action steps
* DP-1312 - Activities Paragraph shows link icon when there is no link
* DP-1279 - Spacing issue between numbered steps & rich text field
* DP-1521 - External links under jclickable containers were not firing the interstitial js

## 3.1.0 (Sprint 10)

### Org Page
* DP-708 - Implement Organization Page in PatternLab
* DP-867 - FE - Action Finder
* DP-874 - FE - Org: Implement Header

### Print Styles
* DP-671 - Design print styles for organizational pages
* DP-644 - Design print styles for guides
* DP-686 - Design print styles for location pages
* DP-658 - Design print styles for How-to pages

### Other
* DP-712 - Handle Stacked Row Optional Header Image variants
* DP-821 - Ensure that link chevron is never bumped to a new line
* DP-980 - Update handicap icon in Patternlab
* DP-730 - Implement footer in Pattern Lab
* DP-796 - Implement MVP Header - Utility Nav in Patternlab

## 3.0.0 (Sprint 9)

### Homepage search
* MGRP-339 - FE: Homepage build-out
* MGRP-304 - FE: Homepage - Multi-row template - refactor
* MGRP-311 - FE: Updated Header

### Org page
* MGRP-302 - FE: Org - Action Finder - enhance
* MGRP-300 - FE: Org - Icon Links
* MGRP-312 - FE: Section Divider
* MGRP-305 - FE: Org - section three up

### Bugs
* MQA-81 - [L2] - 'Featured' and 'All actions & guides' should be headers
* MGRP-290 - Vertically Align Callout links

### Print Styles
* MGVDU-141 - Design print styles for How-to pages
* MGVDU-438 - Design print styles for location pages
* MGVDU-439 - Design print styles for guides

### Other
* MGRP-258 - Updated Pattern Lab Documentation (molecules)
* MGRP-344 - FE - Update rich text image to allow captions and different classes.
* MGVDU-448 - Pilot Header update

## 2.2.0 (Sprint 8)

### MQA bugs

* MQA-23 - Links in the body are turning into a weird display
* MQA-62 - Pilot Homepage Header on mobile has wrong coloring
* MQA-65 - Opening the Common Actions menu in mobile also opens the common actions section on the pilot homepage
* MQA-67 - Cannot collapse Common Actions when open in menu in mobile
* MQA-74 - [action page] - ma__page-header__sub-title is marked-up wrong
* MQA-84 - [Action] - Contact markup headings are non-semantic

### Other
* MGVDU-202 - Action Finder - entire action item should be clickable
* MGVDU-354 - FE Dev - RTE columns - refactor
* MGVDU-357 - FE Dev: Action Steps - refactor
* MGRP-278 - FE Dev: Emergency alert bar
* MGRP-258 - Updated Pattern Lab Documentation (atoms)

## 2.1.0 (Sprint 7)

### Error pages
* MGVDU-253 - Front end: 404 page
* MGVDU-256 - Front end: 403 page
* MGVDU-259 - Front end: 500 page

### Other
* MGVDU-269 - Site Settings (utility nav) language dropdown
* MGVDU-283 - FE Dev: Location Banner - swap stacking order
* MGVDU-312 - FE Dev - Contact Group - refactor address
* MGVDU-313 - Firefox text wrapping bug on Related Topics section on some but not all pages

## 1.1.0 (Sprint 6)

### MGVDU-219 - FE Dev: Guide Page
* MGVDU-216 - FE Dev: Guide Page - Header Banner
* MGVDU-217 - FE Dev: Guide Page - Action Steps
* MGVDU-218 - FE Dev: Guide Page - Guide Sections
* MGVDU-270 - FE Dev: Guide Page - Jump Links
* MGVDU-271 - FE Dev: Guide Page - Callout Alert
* MGVDU-272 - FE Dev: Guide Page - Download Forms
* MGVDU-293 - FE Dev: Guide Page - Callout Time
* MGVDU-294 - FE Dev: Guide Page - Key Actions
* MGVDU-295 - FE Dev: Guide Page - Suggested Guides
* MGVDU-296 - FE Dev: Guide Page - Sidebar title
* MGVDU-300 - FE Dev: Guide - Rich Text 3 up

### MGVDU-208 - Basic Content Page
* MGVDU-88 - Page Discourse Component - using rich-text component instead
* MGVDU-278 - FE Dev: Breadcrumbs - collapsable

### Other
* MGVDU-138 - FE Dev: Modifications to Location/Action page: Multiple contacts
* MGVDU-287 - FE Dev: Alert Bar - Hides globally
* MGVDU-273 - Need fax icon for action page
* MGVDU-282 - Remove Javascript autopopulation of Quick Actions on Location page
* MGRP-154 - Callout Link - bottom margin
* MGRP-156 - Email link doesn't wrap.

## 0.5.0 (Sprint 5)

### MGVDU-181 - Location Page
* MGVDU-172 - Component: Hero Banner Carousel (Location Page)
* MGVDU-204 - FE Dev: Location - Wait Time Indicator
* MGVDU-203 - FE Dev: Location - Icon Indicators
* MGVDU-210 - FE Dev: Location - updated page header
* MGVDU-212 - FE Dev: Location - suggested pages
* MGVDU-213 - FE Dev: Location - inline gallery
* MGVDU-214 - FE Dev: Location - Action Activities section

### MGVDU-208 - Basic Content Page
* MGVDU-88 - Page Discourse Component
* MGVDU-275 - FE Dev - Basic Content - side bar Promo
* MGVDU-278 - FE Dev: Breadcrumbs - collapsable

### Other
* MGVDU-220 - FE Dev: Image credit component

## 0.4.0 (Sprint 4)

### Action Detail page modifications
* MGVDU-120 - FE Dev: Modifications to Action page: Image / diagram
* MGVDU-118 - FE Dev: Modifications to Action page: Sequential Lists
* MGVDU-119 - FE Dev: Modifications to Action page: Map
* MGVDU-137 - FE Dev: Modifications to Action page: OR Lists
* MGVDU-139 - FE Dev: Action Page Header

### Location Page
* MGVDU-174 - Component: Location Hero Banner
* MGVDU-171 - Component: Alert
* MGVDU-175 - Component: Upcoming Events

### Pilot Page
* MGVDU-87 - Feedback Form

## 0.3.0 (Sprint 3)

### Level 0,1,2 pages - Action Funnel
* MGVDU-53 - FE Dev: L0 Page (contains sub tickets)
* MGVDU-54 - FE Dev: L1 Page
* MGVDU-55 - FE Dev: L2 Page (contains sub tickets)

### Pilot Home page
* MGVDU-56 - FE Dev: Pilot homepage (contains sub tickets)

### Action Detail page modifications
* MGVDU-115 - FE Dev: Quick Action Component
* MGVDU-114 - FE Dev: Action Page - tabular data
* MGVDU-106 - FE Dev: Action Page - checklist
* MGVDU-116 - Responsive RTE Video
* MGVDU-139 - Action Page Header Update
* MGVDU-117 - Forms/Downloads

## 0.2.0 (Sprint 2)

### Action Detail page
* MGRV-89 - Related Contact Call-Out
* MGRV-88 - Task Detail Section
* MGRV-90 - Related Task Call-Out
* MGRV-92 - Breadcrumbs
* MGRV-91 - Task Detail Header

## 0.1.0 (Sprint 1)

### Header and Footer
* MGRV-38 - Header plus navigation
* MGRV-51 - Global Styling for elements
* MGRV-39 - Footer

## Sprint A

### Environment Setup
* MGRV-66 - Breakpoints (mobile desktop flow)
* MGRV-37 – Create Github Repo
* MGRV-40 – Setup Pattern Lab
* MGRV-42 – Setup Gulp
* MGRV-41 – Review 18F standards
* MGRV-45 - Create base styling (normalize, typography, RTE)
* MGRV-44 - Create partial sass files (colors, fonts, mixins)
* MGRV-46 - Populate asset folder with icons used (generate SVG sprite)
* MGRV-47 - setup up Web-Based Styleguid outline and scaffolding
* MGRV-50 - Setup dev environment
