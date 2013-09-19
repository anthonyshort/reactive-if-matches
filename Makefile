SRC = $(wildcard lib/*.js)

build: components $(SRC)
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

test: build
	mocha-phantomjs test/index.html

.PHONY: clean standalone
