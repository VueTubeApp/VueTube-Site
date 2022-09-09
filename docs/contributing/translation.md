# Translating VueTube

VueTube is an international project, and we would love to have your help translating the app into your language! If you
would like to help translate VueTube, please follow this guide.

## Guidelines

- **Please do not use Internet translators**

Translations made using machine translation are not allowed in VueTube. You need to know and understand both English and
the
language you're translating to guarantee a good result. Please do not contribute using Google Translator or similar.

_Example: "Enable Return YouTube Dislike integration" should be translated to Spanish as "Activar la integración de
Return YouTube Dislike", but an automatic translation could be "Activar integración Devolver los No me gusta de YouTube"
, and that doesn't sound natural._

- **Consider leaving some words in English**

Some words might sound better in English. For example, "YouTube" is a trademark, and it's better to leave it in English.

_Example: Instead of translating "Hide Dislikes" to French as "Masquer Je n'aime", you can use "Masquer Dislikes"._

- **The name of the language should be in the target language, not in English**

Example: "日本語" instead of "Japanese", "Italiano" instead of "Italian" and "Русский" instead of "Russian".

That doesn't apply to the file name (polish.js, dutch.js, indonesian.js) which should follow the naming convention of
other files in the directory.

* File names may include [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) codes depending on the
  language (i.e. Chinese Traditional and Chinese Simplified).
* If the language is not in the list, please refer to [ISO 639-2](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)

**We rely on your good faith**. As a community project, many of our maintainers are not native speakers of the languages
that the community has provided. We will do our best to review your translations, but we are heavily dependent on the
community to provide us with quality translations. In cases where disagreements arise between translators, we may be
forced to mediate and make a decision regardless of our team's proficiency in the language. As such, we ask that
disagreements between translators be solved in a civil manner without the need for moderation.

## Translating Readme Files

We ask you to first familiarize yourself with the [Markdown syntax](https://www.markdownguide.org/basic-syntax/) before
translating README files.

There are two ways to translate README files: using the GitHub web interface or using a text editor. If you are not
familiar with Git, we recommend using the GitHub web interface.

### Using the GitHub web interface

To translate a README file using the GitHub web interface, follow these steps:

1. Go to the repository of the README file you want to translate.
2. Press the "Fork" button in the top right corner of the page.
3. Press the "Add file" button in the top right corner of the page.
4. Press the "Create new file" button.
5. Type the name of the README file you want to translate in the "Name your file..." field. For example, if you want to
   translate the README file in the `docs` directory, type `docs/README-YOUR-LANGUAGE-HERE.md`
   where `YOUR-LANGUAGE-HERE` is the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code of the
   language you are translating to.
6. Copy the contents of the README file you want to translate from the original repository and paste it into the
   "Edit new file" field.
7. Translate the contents of the README file.
8. Update links to other README files in the translated README file to include the new translation.
8. Save and submit the changes upstream by pressing the "Propose new file" button and then the "Create pull request"
   button.

### Using a text editor

The use of a text editor is recommended for more advanced users. We recommend using [Visual Studio Code](https://code.visualstudio.com/). This method assumes you have Git installed and configured on your computer.

To translate a README file using a text editor, follow these steps:
1. Fork the repository of the README file you want to translate.
2. Clone the repository to your computer.
3. Type the name of the README file you want to translate in the "Name your file..." field. For example, if you want to
   translate the README file in the `docs` directory, type `docs/README-YOUR-LANGUAGE-HERE.md`
   where `YOUR-LANGUAGE-HERE` is the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code of the
   language you are translating to.
4. Copy the contents of the README file you want to translate from the original repository and paste it into the
   "Edit new file" field.
5. Translate the contents of the README file.
6. Commit and push the changes to your fork, then submit a pull request upstream.

## Translating VueTube
Please follow the README file found in `NUXT/plugins/languages/README.md` for instructions on how to translate VueTube.
