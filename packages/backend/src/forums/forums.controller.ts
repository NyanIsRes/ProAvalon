import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ForumsService } from './forums.service';
import { CreateForumPostDto } from './dto/create-forumpost.dto';

@Controller('forums')
export class ForumsController {
  constructor(private readonly forumsService: ForumsService) {}

  @Post()
  async addNewForumPost(
    @Body() createForumPostDto: CreateForumPostDto,
  ) {
    const postId = await this.forumsService.addPost(createForumPostDto);
    return { id: postId };
  }

  @Get()
  async getAllPosts() {
    const posts = await this.forumsService.getPosts();
    return posts;
  }

  @Get(':id')
  async getPost(@Param('id') postId: string) {
    const post = await this.forumsService.getPost(postId);
    return post;
  }
}