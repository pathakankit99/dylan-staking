import Head from 'next/head'
import Link from "next/link"
export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>Gem Farm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="nes-container with-title mb-10">
          <p className="title">Welcome to Gem Farm</p>
          <p>
            This app is designed to illustrate the functionality of Gem Farm. It
            is not production grade. Use at your own risk.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="nes-container with-title mr-5 flex-1">
            <p className="title">Start/manage a farm</p>
            <p className="mb-5">
              Choose this if you have your own NFT collection you would like to
              offer staking for.
            </p>
            <Link href="manager">
              <button className="nes-btn is-primary">Start a farm</button>
            </Link>
          </div>
          <div className="nes-container with-title ml-5 flex-1">
            <p className="title">Stake your NFTs</p>
            <p className="mb-5">
              Choose this if you like to stake your NFTs at one of the
              existing farms.
            </p>
            <Link href="farmer">
              <button className="nes-btn is-primary">Stake NFTs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
