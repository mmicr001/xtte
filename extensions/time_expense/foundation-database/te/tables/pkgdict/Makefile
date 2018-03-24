PKG = $(shell awk '/name *=/ { split($$0, ary, "[\"= ]*");	\
                                  for (i in ary) {		\
 				   if (ary[i] == "name") {	\
 				     print ary[i + 1] ; exit;	\
 				   } } }' ../../../package.xml)

SED_I = $(shell sed -i "" -e "s/Z/Z/" Makefile 2>/dev/null || echo failed)
ifeq ($(SED_I),failed)
  SED_I = sed -i
else
  SED_I = sed -i ""
endif

all:
	find .. -name '*.ui' -exec echo FORMS       +={} \; >  ts.pro
	find .. -name '*.js' -exec echo SOURCES     +={} \; >> ts.pro
	find * -name '*.ts'  -exec echo TRANSLATIONS+={} \; >> ts.pro

	# exclude jsGanttCSS.js because it is really a .css file
	$(SED_I) -e '/jsGanttCSS.js/d' ts.pro

	lupdate -no-obsolete ts.pro
	lrelease ts.pro

	echo '<qm>' > translations.xml

	for TRANSLATION in $$(find * -name '*.qm' | sort) ; do \
	  if ! expr $$TRANSLATION : '.*base.*' ; then \
	    echo '  <loadqm file="$(PKG)/tables/pkgdict/'$$TRANSLATION'"/>' >> translations.xml ; \
	  fi \
	done

	echo '</qm>' >> translations.xml

clean:
	rm -f *.qm
	rm -f translations.xml ts.pro
