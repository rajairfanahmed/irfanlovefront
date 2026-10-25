# RAG, Vector Search & Embeddings Reference

This reference covers semantic chunking, vector embeddings, and hybrid search retrieval.

---

## 📚 1. Document Chunking Strategy

- **Semantic Chunking:** Chunk text on logical structural boundaries (paragraphs, headings, markdown sections) rather than arbitrary character counts.
- **Chunk Size & Overlap:** Standard size `500-800 tokens` with `50-100 token overlap` to preserve context across chunk edges.
- **Metadata Tagging:** Attach source document ID, title, URL, and creation timestamp to each chunk payload for downstream citation links.

---

## 🔎 2. Hybrid Search (Vector + Keyword)

Pure vector search struggles with exact keywords, names, and SKU numbers. Hybrid search combines:
1. **Dense Vector Search:** Cosine similarity via `pgvector` or Pinecone for semantic understanding.
2. **Sparse Keyword Search:** PostgreSQL full-text search (`tsvector` / `websearch_to_tsquery`) for exact phrase matches.
3. **Reciprocal Rank Fusion (RRF):** Combine rankings to select the top 5 most relevant context snippets for prompt injection.
