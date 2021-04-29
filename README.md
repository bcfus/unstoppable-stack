# Unstoppable Stack

This project serves as a general guide and proof of concept for **deploying a full-stack web application onto blockchain-based decentralized infrastructure**.

The repository is structured as a **monorepo** - with **infrastructure configuration**, **application frontend code**, and **application backend code** all in one repository. This is done so that anyone can easily clone this one repository and begin to experiment with deploying a decentralized full-stack application.


### Decentralized infrastructure

| DNS | Frontend  | Backend |
|:---:|:---:|:---:|
| ![](guide/images/handshake_logo.png) | ![](guide/images/skynet_logo.png) | ![](guide/images/akash_logo.png) |
| [Handshake](https://handshake.org/) | [Skynet](https://siasky.net/) | [Akash](https://akash.network/) |

### Web application
The test application that we will deploy in this guide is a todo app, built using the technologies below. The application structure is bootstrapped using this **cookiecutter** template [https://github.com/Buuntu/fastapi-react](https://github.com/Buuntu/fastapi-react).

| Frontend  | Backend | Database |
|:---:|:---:|:---:|
| [React](https://reactjs.org/) | [FastAPI (Python)](https://fastapi.tiangolo.com/)| [PostgreSQL](https://www.postgresql.org/) |


## Step 1 - Buy Handshake domain
There are a few simple options for registering a **Handshake** domain name:

1. Use a platform like **Namebase** [https://www.namebase.io/](https://www.namebase.io/) or a tool like **Bob Wallet** [https://github.com/kyokan/bob-wallet ](https://github.com/kyokan/bob-wallet) to purchase a top-level Handshake domain.

	Domain purchases using Handshake are achieved through an [auction process](https://www.namebase.io/blog/tutorial-3-basics-of-handshake-auction-and-bidding). It will take **10 days** for your auction to finalize. and a winning bid, before you can make use of the domain.

2. Use **gateway.io** [https://gateway.io/](https://gateway.io/) to purchase a domain under one of gateway's existing top-level Handshake domains, like **.c** or **.api**. Domains purchased in this way are **usable immediately**. This is the option I used for this guide to purchase **[http://unstoppable.c](http://unstoppable.c)**.


## Step 2 - Deploy back-end to Akash

You can deploy to Akash using the **standard Akash CLI** directly [https://docs.akash.network/guides/install](https://docs.akash.network/guides/install) but for the purpose of this guide, I am using **tombeynon's Akash Deploy UI** [https://github.com/tombeynon/akash-deploy](https://github.com/tombeynon/akash-deploy) which is a tool built on top of the standard CLI. Steps for deploying to Akash using this tool are below.

1. Make sure **Docker** [https://www.docker.com/](https://www.docker.com/) is installed
2. Start the **Akash Deploy UI** tool by running the following:
	```
	docker run -v ~/.akash-ui:/root/akash -p 3000:3000 --rm -it tombeynon/akash-deploy
	```
3. Visit [http://localhost:3000
]() to access the tool
4. Use the tool to **create a new wallet**. Make sure to record your mnemonic phrase so that you can restore the wallet if needed in the future.
5. **Fund this new wallet with at least 5 AKT** (5,000,000 UAKT) by transferring 5 AKT or more to the displayed wallet address.

## Step 3 - Deploy front-end to Skynet
Deployment of the front-end to Skynet is **handled automatically** in this repository, using **GitHub Actions**. When any update to the `application/frontend/` directory is pushed to the *master* branch, the Action workflow will be run automatically by GitHub. This [workflow](https://github.com/bcfus/unstoppable-stack/blob/master/.github/workflows/frontend.yml) tests, builds, and deploys the static files to **Skynet**.

This GitHub workflow is based on the excellent write up by **Karol Wypchło** [https://blog.sia.tech/automated-deployments-on-skynet-28d2f32f6ca1](https://blog.sia.tech/automated-deployments-on-skynet-28d2f32f6ca1) and uses his pre-built Skynet deploy Action.

## Step 4 - Configure Handshake domain
...

## Step 5 - Access Handshake domain
You can use the methods described in this guide [https://www.namebase.io/blog/how-to-access-handshake-domains/](https://www.namebase.io/blog/how-to-access-handshake-domains/) to add support for resolving Handshake domains. With this approach **you will be able to visit the domain directly** and have it resolve, ex. **[http://unstoppable.c](http://unstoppable.c)**

**Another option** is to use the proxy site **http://hns.to** which will allow those clients not configured to use the Handshake DNS servers to still resolve any Handshake domain. This is done by prepending your domain to hns.to, ex. **[http://unstoppable.c.hns.to](http://unstoppable.c.hns.to)**.

## Step 6 - Setup database backups
Database backups can be stored in a decentralized manner on **Sia**, **Skynet**, or **Storj** by using **Filebase** [https://filebase.com/ ](https://filebase.com/)which is an S3-compatible object storage platform. There are a number of services that integrate with **Filebase** to provide automated backups.

- **BackupNinja** [https://docs.filebase.com/partner-integrations/backupninja](https://docs.filebase.com/partner-integrations/backupninja)
-  **SimpleBackups** [https://simplebackups.io/filebase-backup-and-restore/](https://simplebackups.io/filebase-backup-and-restore/)
-  **SharpShooter** [https://docs.filebase.com/partner-integrations/snapshooter](https://docs.filebase.com/partner-integrations/snapshooter)
