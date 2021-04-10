
# Deploy: [encryption-text.netlify.app](https://encryption-text.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1a99a45f-5275-45bd-a325-b6629916fe7c/deploy-status)](https://app.netlify.com/sites/encryption-text/deploys)


---

<!-- ![alphabet](https://raw.githubusercontent.com/dzmitry-duboyski/encryption-text/dev/src/assets/img/photo_alphabet.jpg) -->



## **How it works:**

The characters of the language you use when printing are contained in the [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters) table. The characters used in your language occupy a specific range of the Unicode table. The Unicode table includes characters from almost every written language in the world. Also in this table there are symbols that look similar or that can be understood in the same way.

The main idea is to replace characters in your text with other characters from the code table that look the same or similar. After processing, the appearance of the text may change, but the meaning will not be lost. After replacing characters, your text will remain readable for humans, but processing it by various systems will be significantly complicated.



## **Application area:**

* `Complicating the search for text`: the processed text will be difficult to find (***in fact, these will already be other words, consisting of letters of different alphabets***).
For example: If you leave a comment with this text, it will be difficult to find. Such text as a whole will be very poorly indexed, most likely such text will not be indexed in search engines.

* `Bypass Censorship`: Processed text is difficult to moderate. When using various text censoring tools, the text is compared with a template test, the probability of finding the processed text in templates is small. It is highly likely that the text will pass the censorship filter if the filter developer did not consider such circumvention methods.


## **Get started**

1. Open the page [encryption-text.netlify.app](https://encryption-text.netlify.app).

2. Type\paste text in the 'Original text' field.
    Type text:
  ![keyboard input](https://github.com/dzmitry-duboyski/encryption-text/blob/master/src/assets/media-readme.md/gif/keyboard_input.gif)

  Paste text (Paste the text from the clipboard with one click on the field header 'Original text'):
  ![keyboard input](https://github.com/dzmitry-duboyski/encryption-text/blob/master/src/assets/media-readme.md/gif/paste_input.gif)

3. The modified text is displayed in the 'Converted text' field, copy it.
