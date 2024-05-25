/**
 *  * @typedef {import('./../repositories/profile/profile').default} Profile
 * @typedef {import('express').NextFunction} NextFunction
 * @typedef {import('express').Request & { profile: Profile}} Request
 * @typedef {import('express').Response} Response
 */

const express = require('express');
const bindServices = require('./../bindServices');

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns 
 */
async function authorize(req, res, next) {
    const profileId = req.get('id');

    if (profileId === null || profileId === undefined || profileId === '') {
        res.status(404).end();
    }

    // @ts-ignore -- Not possible be undefined
    const profile = await bindServices.profileService.findProfileById(parseInt(profileId));

    if (profile === null) {
        res.status(404).end();
    }

    // @ts-ignore -- Not possible be null
    req.profile = profile;
    next();
}


module.exports = authorize;
