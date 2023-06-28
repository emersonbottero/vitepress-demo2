## Introduction

Before you can start making API calls, you need to create your personal access token.

1. Go to your [token page](https://api/api-tokens)

2. Create your token and save it

::: danger

Be careful once you close the window with token you are not able to see it again!

:::

```mermaid
flowchart TD
  Start --> Stop
```

![](/K.png)
<!-- <img src='/K.png' width='60' > -->
---

```mermaid
graph LR;
    K([<img src='/K.png' width='60' >])-.->G((<img id='git' src='/Octocat.png' width='50' >));
    H([<img id='helm' src='/helm.png' width='60' >])-.->G
    G-->A;
    A(<img src='/argo-cd.png' width='60' >)-->D(<img src='/ocp.png' width='60' > ..);
%%classDef img fill:none,color:none,stroke:none,border-radius:50px
%%class G,D,A,K,H img
click G "http://www.github.com" "This is a link" _blank
click K "https://kustomize.io/" _blank
```

<!-- ```mermaid
mindmap
Root
    A
      B
      C
``` -->

<style>
  #git {
    border-radius: 50px;
  }

  #helm,
  .dark #git{
    transform: scale(1.5);
  }

  .dark #helm {
    filter: brightness(1.5);
  }
</style>
