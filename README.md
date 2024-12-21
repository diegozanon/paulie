# Paulie

Paulie is an AI-powered tool designed to help learning a foreign language through the shadowing technique. By taking a text input, Paulie leverages Amazon Polly to generate natural-sounding speech in the desired language. The resulting audio file includes strategically placed pauses, enabling learners to follow along and practice repeating phrases, improving pronunciation, fluency, and confidence. It also offers the option to generate a video, allowing users to listen, repeat, and read the text simultaneously for a more immersive learning experience.

## Example

TODO

## Install

```
npm install paulie
```

## Configuration

You need to have an AWS account and create an IAM user with access to (and only to) Amazon Polly. If it's your first time using Amazon Polly, you have a free tier of 12 months that starts to count when you make your first request to Amazon Polly.

Guides:

- [Create an IAM user in your AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
- [Amazon Polly Pricing](https://aws.amazon.com/polly/pricing/)

## Usage

```javascript
import * as paulie from "paulie";

// TODO
```

## Name

Paulie is named as a tribute to the 1998 movie [Paulie](https://www.imdb.com/title/tt0125454/), which tells the story of a talking parrot on a journey to find his friend. This library is not affiliated with the film in any way. Additionally, Paulie shares a similar sound to Polly from Amazon Polly, which adds a nice touch.
