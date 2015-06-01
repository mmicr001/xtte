VER=2.3.0
FROM=220
TO=230
TAROPTS = -h --exclude .\* --exclude Makefile

all: ../packages/xtte-$(FROM)to$(TO).gz ../packages/xtte-$(VER).gz

../packages/xtte-$(VER).gz: FORCE
	cp package_install.xml package.xml && cd .. && \
	tar czf packages/xtte-$(VER).gz         $(TAROPTS) resources

../packages/xtte-$(FROM)to$(TO).gz: FORCE
	cp package_update.xml package.xml  && cd .. && \
	tar czf packages/xtte-$(FROM)to$(TO).gz $(TAROPTS) resources

FORCE:
