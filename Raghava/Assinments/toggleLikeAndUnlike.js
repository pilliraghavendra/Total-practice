let isLikedPuppy = false

function onClickLikeButton() {
    if (isLikedPuppy === false) {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        document.getElementById("likeIcon").style.color = "#0967d2"
        document.getElementById("likeButton").style.backgroundColor = "#0967d2"
        document.getElementById("likeButton").style.color = "#ffffff"
        isLikedPuppy = true

    } else {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
        document.getElementById("likeIcon").style.color = "#9aa5b1"
        document.getElementById("likeButton").style.backgroundColor = "#9aa5b1"
        document.getElementById("likeButton").style.color = "black"
        isLikedPuppy = false
    }
}