#!/usr/bin/python3

import sys
import subprocess

if len(sys.argv) < 2:
    print('make sure put the comment')
    exit()

subprocess.run(['git','add','.'])
subprocess.run(['git','commit','-m',sys.argv[1]])
msg = subprocess.run(['git','checkout','master'], capture_output=True, text=True)
print(msg.stdout)
subprocess.run(['git','rebase','test'])
subprocess.run(['git','push','origin','master'])
subprocess.run(['git','checkout','test'])