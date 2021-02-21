
# Deploy: [encryption-text.netlify.app](https://encryption-text.netlify.app/)

## Deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/599620a0-36f3-47eb-9788-ee87b7e43d3b/deploy-status)](https://app.netlify.com/sites/encription-text/deploys)

---

![alphabet](https://raw.githubusercontent.com/dzmitry-duboyski/encryption-text/dev/src/assets/img/photo_alphabet.jpg)



## **How it works:**

The characters of the language you use when printing are contained in the [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters) table. The characters used in your language occupy a specific range of the Unicode table. The Unicode table includes characters from almost every written language in the world. Also in this table there are symbols that look similar or that can be understood in the same way.

The main idea is to replace characters in your text with other characters from the code table that look the same or similar. After processing, the appearance of the text may change, but the meaning will not be lost. After replacing characters, your text will remain readable for humans, but processing it by various systems will be significantly complicated.



## **Application area:**

* `Complicating the search for text`: the processed text will be difficult to find (***in fact, these will already be other words, consisting of letters of different alphabets***).
For example: If you leave a comment with this text, it will be difficult to find. Such text as a whole will be very poorly indexed, most likely such text will not be indexed in search engines.

* `Bypass Censorship`: Processed text is difficult to moderate. When using various text censoring tools, the text is compared with a template test, the probability of finding the processed text in templates is small. It is highly likely that the text will pass the censorship filter if the filter developer did not consider such circumvention methods.


***P.S. Currently, only Russian is supported.***

