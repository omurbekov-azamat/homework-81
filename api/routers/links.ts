import express from 'express';
import Link from "../modules/Link";
import {LinkWithoutId} from "../types";

const linksRouter = express.Router();

linksRouter.post('/', async (req, res) => {
    try {
        if (!req.body.url) {
            return res.status(400).send({error: 'Url is required'});
        }

        const symbol = 'qwertyuiopasdfghjklzxcvbnm';
        let shortUrl = '';

        for (let i = 0; i < 2; i++) {
            shortUrl += symbol.charAt(Math.floor(Math.random() * symbol.length));
            for (let j = 0; j < 2; j++) {
                shortUrl += symbol.toUpperCase().charAt(Math.floor(Math.random() * symbol.length));
            }
        }

        const dataLink: LinkWithoutId = {
            shortUrl,
            originalUrl: req.body.url,
        };

        const link = new Link(dataLink);

        try {
            await link.save();
            return res.send(link);
        } catch (e) {
            return res.status(400).send(e);
        }

    } catch (e) {
        return res.sendStatus(500);
    }
});

linksRouter.get('/:shortUrl', async (req, res) => {
    try {
        const result = await Link.find({shortUrl: req.params.shortUrl});

        if (!result) {
            return res.sendStatus(404);
        }

        const originalUrl = result[0].originalUrl;

        return res.status(301).redirect(originalUrl);
    } catch (e) {
        return res.sendStatus(500);
    }
});

export default linksRouter;