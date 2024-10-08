import ListComponent from "@/components/layout/Sider/components/index";
import { useWallet } from "@/providers/WalletProvider";

const SiderList = (props: any) => {
  const admins = [
    "GZRS85Bi4f5VanAa9QSFsUbV4wpJxeGmB6d6fo8CjujD",
    "4dJ6QHdisXwcFVjADr8dS7BqHfDUfuzc6pzDoTEgGDQi",
    "FhvzCMoiTq8JHZuKwiPsGPgVtQjR8Z4KJ71r55h2tgqC",
    "CBDspbBz3Xy6MYyURfGVzqMg7rS8EsQzBy3hf7UbR7uv",
  ];
  const { walletID } = useWallet();

  return (
    <>
      <ul className="flex text-[#D4D4D4] text-md mt-[10px] overflow-auto mx-auto gap-2 my-0">
        <ListComponent
          _name="Marketplace"
          _icon="/icon/marketplace.svg"
          _clickedIcon="/icon/marketplace_blue.svg"
          _url="/marketplace"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
        <ListComponent
          _name="My NFTs"
          _icon="/icon/NFT.svg"
          _clickedIcon="/icon/NFT_blue.svg"
          _url="/nfts"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
        {admins.includes(walletID) && (
          <ListComponent
            _name="Create NFT"
            _icon="/icon/create_icon_white.svg"
            _clickedIcon="/icon/create_icon_blue.svg"
            _url="/create-nft"
            pathname={props.pathname}
            siderWidth={props.siderWidth}
          />
        )}
        <ListComponent
          _name="Transfer"
          _icon="/icon/transfer_white.svg"
          _clickedIcon="/icon/transfer_blue.svg"
          _url="/transfer"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
        <ListComponent
          _name="Wallet/Instruction"
          _icon="/icon/guide_white.svg"
          _clickedIcon="/icon/guide_blue.svg"
          _url="/instruction"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
      </ul>
    </>
  );
};
export default SiderList;
