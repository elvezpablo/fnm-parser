FNM Parser

Parses Fannie May form 1003 version 3.2 into JSON

Note: Not all lines have been mapped yet but it would be easy to extend to what you need with options.


# Linting

Using the airbnb linting rules


(
  export PKG=eslint-config-airbnb;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)



References:

https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAA&url=https%3A%2F%2Fwww.fanniemae.com%2Fcontent%2Ftechnology_requirements%2Fresidential-loan-data-1003-integration-guide.xlsx&ei=n4tHVaDoDMetogS66IGYCw&usg=AFQjCNFJ49jcdzdw27B_zKLl-a0kpy2xzA&sig2=DJBusEkmNunY1H5nxwTvGQ&bvm=bv.92291466,d.cGU
