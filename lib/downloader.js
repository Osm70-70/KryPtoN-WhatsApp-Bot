/* eslint-disable prefer-promise-reject-errors */
const { getVideoMeta } = require('tiktok-scraper')
const { fetchJson } = require('../utils/fetcher')
const { promisify } = require('util')
//const { instagram, twitter } = require('video-url-link')
const { resolve } = require('path')
/*
const igGetInfo = promisify(instagram.getInfo)
const twtGetInfo = promisify(twitter.getInfo)
*/

const ytmp3 = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    fetchJson('https://mhankbarbar.herokuapp.com/api/yta?url='+ url)
        .then((result) => {
            if (result.status != 200) return resolve(result.status)
        resolve(result)
        }).catch((err) => {
            console.error(err)
            reject(err)
        })
})

const ytmp4 = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    fetchJson('https://mhankbarbar.herokuapp.com/api/ytv?url='+ url)
        .then((result) => {
            if (result.status != 200) return resolve(result.status)
        resolve(result)
        }).catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    ytmp3,
    ytmp4
}
