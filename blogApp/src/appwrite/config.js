import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  storage;
  databases;

  constructor() {
    this.client.setEndpoint(conf.url).setProject(conf.project_Id);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.database_id,
        conf.collection_id,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        conf.database_id,
        conf.collection_id,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.database_id,
        conf.collection_id,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.database_id,
        conf.collection_id,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(query = [Query.equal("status", ["active"])]) {
    try {
      return await this.databases.listDocuments(
        conf.database_id,
        conf.collection_id,
        query
      );
    } catch (error) {
      throw error;
    }
  }

  //   file storage

  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.bucket_id, ID.unique, file);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.bucket_id, fileId);
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(conf.bucket_id, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
