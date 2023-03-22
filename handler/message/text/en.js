exports.textTnC = () => {
    return `
Bot By Osama
Instagram: @osm.nc`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname || ''}! 👋️
Here are some of the features of this bot! ✨

Sticker Maker:
1. *!sticker*
To convert an image into a sticker, send the image with the caption !sticker or reply to the image that has been sent with !sticker.

2. *!stickers* _<Image Url>_
To change the image from the url to a sticker.

Etc:
1. *!tnc*
Displays Bot Terms and Conditions.

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are some of the group admin features included in this bot!

1. *!kick* @user
Removing members from the group (can be more than 1).

2. *!promote* @user
Promote members to group admins.

3. *!demote* @user
Demote Group admins.

3. *!tagall*
Mention of all group members.`
}
