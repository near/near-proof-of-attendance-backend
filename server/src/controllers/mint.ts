import { Router, Request, Response } from "express";
import Joi from "joi";
import { getEnvVariables } from "../utils/environment";
import { NEAR } from "../services/near";
import { AccountId, Attendee } from "../types"; 

const router = Router();

const {  CONTRACT_OWNER } = getEnvVariables();

const mint = async (request: Request, response: Response) => {
  // In this object we call the NEAR 
  const near = await NEAR.get_instance();
  // In this endpoint we call the nft_mint method of our contract for each attendee. Through a loop.
  try {
    const {
      body
    } = request as any;

    const { owner_id, attendees, url, token_metadata: metadata, filename } = body;

    Joi.assert(url, Joi.string());

    Joi.assert(filename, Joi.string());
    const now = Date.now();
    
    const now_utc = new Date(now).toUTCString();

    const nft_mint = {
      owner_id:  CONTRACT_OWNER, 
      metadata: {
        "title": "", 
        "description": "", 
        "media": url, 
        "media_hash": "0", 
        "copies": "0", 
        "issued_at": now_utc, 
        "expires_at": "01/01/2100",  // Should ask if POA nft are expirable
        "starts_at": now_utc, 
        "updated_at": now_utc, 
        "extra": "", 
        "reference": "", 
        "reference_hash": "0"
      }
    }

    const walletIds: AccountId[] = attendees.map((attendee: Attendee) => {
      return attendee.walletId;
    });
    // Onchain mint_batch
    const mint = await near.mint_batch(walletIds, nft_mint.metadata);
    const response_object = { success: 'OK', ...mint }
    response.status(200).json(response_object);
  } catch (error) {
    console.log("Error in mint", error);
    response.status(500).json({ error: true, message: error });
  }
};

router.post("/mint", mint);

export default router;