# Unstoppable Stack
This guide and repository serves as a proof of concept for deploying a full-stack web application using modern decentralized platforms.

### Decentralized infrastructure
- back-end platform: **Akash** [https://akash.network/](https://akash.network/)
- front-end platform: **Skynet** [https://siasky.net/](https://siasky.net/)
- domain/DNS: **Handshake** [https://handshake.org/](https://handshake.org/)

### Web application
The test application that we will deploy in this guide is a todo app, built using the technologies below. The application structure is bootstrapped using **cookiecutter** [https://github.com/cookiecutter/cookiecutter](https://github.com/cookiecutter/cookiecutter) with this **template** [https://github.com/Buuntu/fastapi-react](https://github.com/Buuntu/fastapi-react).

- back-end: **FastAPI** (Python) [https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)
- front-end: **React** [https://reactjs.org/](https://reactjs.org/)
- database: **PostgreSQL** [https://www.postgresql.org/](https://www.postgresql.org/)


## Step 1 - Buy Handshake domain
There are a few simple options for registering a **Handshake** domain name:

1. Use a platform like **Namebase** [https://www.namebase.io/](https://www.namebase.io/) or a tool like **Bob Wallet** [https://github.com/kyokan/bob-wallet ](https://github.com/kyokan/bob-wallet) to purchase a top-level Handshake domain.

	Domain purchases using Handshake are achieved through an [auction process](https://www.namebase.io/blog/tutorial-3-basics-of-handshake-auction-and-bidding). It will take **10 days** for your auction to finalize (and a winning bid) before you can make use of the domain.

2. Use **gateway.io** [https://gateway.io/](https://gateway.io/) to purchase a domain under one of gateway's existing top-level Handshake domains, like **.c** or **.api**. Domains purchased in this way are **usable immediately**. This is the option I used for this guide to purchase **[http://unstoppable.c]()**.


## Step 2 - Deploy back-end to Akash

You can, of course, deploy to Akash using the **standard Akash CLI** directly [https://docs.akash.network/guides/install](https://docs.akash.network/guides/install) but for the purpose of this guide, I am using **tombeynon's Akash Deploy UI** [https://github.com/tombeynon/akash-deploy](https://github.com/tombeynon/akash-deploy) which is a tool built on top of the standard CLI.

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
...

## Step 4 - Configure Handshake domain
...

## Step 5 - Access Handshake domain
You can use the methods described in this guide [https://www.namebase.io/blog/how-to-access-handshake-domains/](https://www.namebase.io/blog/how-to-access-handshake-domains/) to add support for resolving Handshake domains. With this approach **you will be able to visit the domain directly** and have it resolve, ex. **[http://unstoppable.c](https://www.namebase.io/blog/how-to-access-handshake-domains/)**

**Another option** is to use the proxy site **http://hns.to** which will allow those clients not configured to use the Handshake DNS servers to still resolve any Handshake domain. This is done by prepending your domain to hns.to, ex. **[http://unstoppable.c.hns.to]()**.

## Step 6 - Setup database backups
...
