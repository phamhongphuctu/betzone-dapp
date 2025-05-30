export async function getWalletAddress(username: string): Promise<string> {
    const res = await fetch(`https://betzone-wallet-api.onrender.com/api/user-wallet/${username}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();
    return data.publicKey;
  }
  