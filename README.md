# 2112 NP Export

Ever need a CSV file with all the current Cryptorunner Notoriety Points in it?

```
npm install

node index.js > all-the-nps.csv
```

It takes several minutes to get through all the runners. You just gotta wait.

If you want to watch its progress, go to another terminal and do this:

```
tail -f all-the-nps.csv
```

and it'll show you each row as it gets downloaded and written.

Now you've got it. Don't run this too often, please, it uses a few semi-limited resources.
