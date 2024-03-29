Package is built with tsc. This shoul be able to be packaged and importable by other packages.


The importing packages cannot use the validators when for example a schema is using the `optional` modifier. tsc cannot include the types in the output since they are not exported in the vine package.
