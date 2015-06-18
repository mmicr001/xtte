VER = $(shell awk '/version *=/ { split($$0, ary, "[\"= ]*");      \
                                  for (i in ary) {                 \
                                    if (ary[i] == "version") {     \
                                      print ary[i + 1] ; exit;     \
                                    } } }' package.xml)

TAROPTS = -h --exclude .\* --exclude Makefile

all: ../../packages/xtte-$(VER).gz

../../packages/xtte-$(VER).gz: FORCE
	[ `uname -s` = Linux ]
	cd .. ; tar czf ../packages/xtte-$(VER).gz $(TAROPTS) time_expense

FORCE:
