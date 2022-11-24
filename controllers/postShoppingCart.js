import db from "../database/db.js";

async function postShoppingCart(req, res) {
  const product = req.product;
  const email = res.locals.user.email;
  try {
    await db
      .collection("shopping")
      .updateOne({ email }, { $push: { cart: product } });
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
}
export default postShoppingCart;
