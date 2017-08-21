# extract version number from the package.xml
VER = $(shell awk '/version *=/ { split($$0, ary, "[\"= ]*");	\
                                  for (i in ary) {		\
				    if (ary[i] == "version") {	\
				      print ary[i + 1] ; exit;	\
				    } } }' package.xml)
PKG = $(shell awk '/name *=/ { split($$0, ary, "[\"= ]*");	\
                                  for (i in ary) {		\
				    if (ary[i] == "name") {	\
				      print ary[i + 1] ; exit;	\
				    } } }' package.xml)

DIR = $(shell awk '/id *=/   { split($$0, ary, "[\"= ]*");	\
                                  for (i in ary) {		\
				    if (ary[i] == "id") {	\
				      print ary[i + 1] ; exit;	\
				    } } }' package.xml)

EXCLUDE = --exclude Makefile --exclude .\*
TAROPTS = -h

all: FORCE
	if [ ! -e $(PKG)/tables/pkgdict/$(PKG)_ts.pro ] ; then \
	  cd $(PKG)/tables ; \
	  find * -name *.ui -printf '        ../%p \\\n' | sort | \
	   sed -e '1 s/        /FORMS = /' -e '$$ s/ \\//' >> \
	   pkgdict/$(PKG)_ts.pro ; \
	  echo "" >> pkgdict/$(PKG)_ts.pro ; \
	  find * -name *.js -printf '          ../%p \\\n' | sort | \
	   sed -e '1 s/          /SOURCES = /' -e '$$ s/ \\//' >> \
	   pkgdict/$(PKG)_ts.pro ; \
	  echo "" >> pkgdict/$(PKG)_ts.pro ; \
	  find * -name *.ts -printf '               %f \\\n' | sort | \
	   sed -e '1 s/               /TRANSLATIONS = /' -e '$$ s/ \\//' >> \
	   pkgdict/$(PKG)_ts.pro ; \
	fi

	lupdate -no-obsolete $(PKG)/tables/pkgdict/$(PKG)_ts.pro
	lrelease $(PKG)/tables/pkgdict/$(PKG)_ts.pro

	rm $(PKG)/tables/pkgdict/translations.xml
	echo '<qm>' >> $(PKG)/tables/pkgdict/translations.xml

	for TRANSLATION in $$(find $(PKG)/tables/pkgdict -name *.qm | sort) ; do \
	 if ! expr $$TRANSLATION : '.*base.*' ; then \
	   echo '  <loadqm file="'$$TRANSLATION'"/>' >> $(PKG)/tables/pkgdict/translations.xml ; \
	  fi \
	done

	echo '</qm>' >> $(PKG)/tables/pkgdict/translations.xml

	cp package.xml ../package.xml
	xsltproc -o package.xml $(PKG)/tables/pkgdict/build.xsl package.xml

	cd .. && tar czf ../../packages/$(PKG)-$(VER).gz $(TAROPTS) $(EXCLUDE) $(DIR)

	rm $(PKG)/tables/pkgdict/*.qm
	mv ../package.xml .

FORCE:
