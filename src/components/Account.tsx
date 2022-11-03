/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export const Account = function Account() {
  const { account, library } = useWeb3React();
  const [ensName, setEnsName] = useState(undefined);
  const [accountShowType, setAccountShowType] = useState<"ensName" | "address">("address");
  // lookup ens name
  useEffect(() => {
    const lookupEnsName = async () => {
      if (!!account && !!library) {
        const name = await library?.lookupAddress(account);
        if (name) {
          setAccountShowType("ensName");
          setEnsName(name);
        } else {
          setAccountShowType("address");
        }
      }
    };
    lookupEnsName();
  }, [account, library]);

  return (
    <div
      className="btn btn-ghost btn-sm rounded-btn text-tran"
      onClick={() => {
        setAccountShowType((type) => {
          return type === "address" ? "ensName" : "address";
        });
      }}
    >
      <span>Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>

      {accountShowType === "ensName" ? (
        <span className="normal-case">{ensName}</span>
      ) : (
        <span className="normal-case">
          {account === null
            ? "-"
            : account
            ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
            : ""}
        </span>
      )}
    </div>
  );
};

export default Account;
