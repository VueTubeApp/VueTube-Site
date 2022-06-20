# Return YouTube Dislike

## What is Return YouTube Dislike?
Return YouTube Dislike (or RYD) is a third party API that returns dislike counts for YouTube videos after they got removed in December 2021. It's available in **VueTube** as a plugin. Dislike stats aren't exact but they are very accurate, using a combination of archived dislike counts of old videos, votes by users and extrapolation. In the future creators will be able to share their own dislike counts from Youtube Studio, according to their [documentation](https://returnyoutubedislike.com/faq).

## How does it work?

When you watch a video, RYD returns a dislike count from their API. When you like or dislike a video, that vote is sent anonymously to the database and it's used to calculate dislikes (the counter updates anytime between a few hours and a few days). An unique identifier is assigned to you for preventing SPAM, but it's not related to your Google account or your YouTube channel. For example, if a video has 100,000 likes, 1,000 likes from RYD users and 3,000 dislikes from RYD users, the extension will estimate 300,000 total dislikes for the video.

*You can disable the sharing of your vote to the RYD database if you wish. You will still be able to see dislikes.*

## Credits

Return YouTube Dislike is created by Dmitry Selivanov. View his official website [here](https://returnyoutubedislike.com).

<hr>

<p align="center"> <img src="https://www.returnyoutubedislike.com/logo.png" alt="RYD Logo" width="250"> </p>
