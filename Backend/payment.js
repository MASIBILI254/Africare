//intialize mpesa daraja payment
export const initializePayment = async (req, res) => {
  try {
    const { amount, phoneNumber } = req.body;
    

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}