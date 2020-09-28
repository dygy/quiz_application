# react-sample

* send POST request to origin with this object  
`{
  questions": [
    {
      "title": "title of first question",
      "answers": [
        {
          "title": "answer title",
          "photo": url to IMG",
          "description": "description"
        },
        {
          "title": "answer title",
          "photo": url to IMG",
          "description": "description"
        },
        {
          "title": "answer title",
          "photo": url to IMG",
          "description": "description"
        }
      ]
    },
  ]
}`
* in response you will get endpoint to your test 
* open iframe with it on your page
* at the end of quiz, iframe will send event message with answers of your user
as 
{
"question title":"answer title"
}
