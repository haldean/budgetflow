all:
	hastec --opt-google-closure=tools/compiler.jar Main.hs

noclosure:
	hastec Main.hs

clean:
	rm *.js *.jsmod *.hi *.o
