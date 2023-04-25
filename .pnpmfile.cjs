function readPackage(pkg, context) {
  if (pkg.name === 'eslint-plugin-jsx-a11y' && pkg.version.startsWith('6.6.1')) {
    pkg.dependencies = {
      ...pkg.dependencies,
      "language-tags": "1.0.5",
    }
  }
  // if (pkg.name === '@umijs/plugins') {
  //   pkg.dependencies = {
  //     ...pkg.dependencies,
  //     "@ant-design/pro-components": "2.3.48",
  //   }
  // }

  if (pkg.name === 'bizcharts' && pkg.version.startsWith('4.')) {
    pkg.dependencies = {
      ...pkg.dependencies,
      "@antv/scale": "~0.3.13",
    }
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
}
