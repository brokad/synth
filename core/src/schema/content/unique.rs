use crate::compile::Compile;
use crate::graph::UniqueNode;
use crate::{Compiler, Content, Graph};
use anyhow::Result;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub enum UniqueAlgorithm {
    Hash,
}

impl Default for UniqueAlgorithm {
    fn default() -> Self {
        Self::Hash
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
#[serde(deny_unknown_fields)]
pub struct UniqueContent {
    #[serde(default)]
    pub algorithm: UniqueAlgorithm,
    pub content: Box<Content>,
}

impl Compile for UniqueContent {
    fn compile<'a, C: Compiler<'a>>(&'a self, compiler: C) -> Result<Graph> {
        let graph = self.content.compile(compiler)?;
        let node = match self.algorithm {
            UniqueAlgorithm::Hash => UniqueNode::hash(graph),
        };
        Ok(Graph::Unique(node))
    }
}
