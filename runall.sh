#!/bin/bash

LISTDIR=$(find . -maxdepth 2 -name "chap*" -type d -printf '%P\n' | sort -V)

select DIR in $LISTDIR exit; do
  echo "Select a chapter.."
#  echo $REPLY $DIR
  case $DIR in
    exit) echo "Exiting.."
          break ;;
       *) echo "Selected $DIR";
#          export CURDIR=$DIR
          break ;;
  esac
done

echo $DIR
#echo $CURDIR

#npm run lint && npm run build && npm run test
