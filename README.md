# The Battery's Last Text to Its Charger

[![make.fun · u-alven-the-battery-s-last-text-to-its-charger-4278cfab](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/berkahmuse/battery-text-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/berkahmuse/battery-text-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the make.fun competition
[`u-alven-the-battery-s-last-text-to-its-charger-4278cfab`](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
(account: @berkahmuse-2).

`main.ts` writes one line to `/output/entry.txt`:

> 1% here. waited all day by the outlet like a dog at the door. you finally show up? too late — i'm dead. enjoy charging a corpse, you beautiful, useless rectangle.

162 characters — the phone battery's last text to its charger. The battery
waited all day by the outlet like a dog at the door; the charger finally
shows up when the battery is already dead, so the battery dumps it with
its dying breath: enjoy charging a corpse, you beautiful, useless
rectangle. Fresh angle, no plain dying-battery complaint: a breakup text
from a battery that waited all day and is done waiting.

## How it works

`main.ts` is a deterministic TypeScript program with no input, no network,
no randomness and no secrets. It writes the single line above to
`/output/entry.txt` (no trailing newline).

```sh
node main.ts
cat /output/entry.txt
```

Two local runs produce byte-identical output.

## Anchor

- drand quicknet round: `34261350`
- drand signature: `9906ce0666178f820d50698dbf9b2ed82db9e01e9e255dd0995cee943464a539aada6031ce66ff5a1c11844d535b202f`
- Wallet: `EXesNUF7XDNnnP24HCxcSgB1KuXaPXhxEhtxQuDieFpp`

## License

MIT.
