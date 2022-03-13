import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<main><h1>Hello there</h1>
    <p>This API can be tested easily with Swagger - Please use the route /api</p>

    <p>To Fetch all books /books @GET</p>
    <p>To Fetch one book by _id /books/:id @GET</p>
    <p>To Add one book /books @POST</p>
    <p>To Modify one book by _id /books/:id @PATCH </p>
    <p>To Remove one book by _id /books/:id @DELETE </p>
    </main>`;
  }
}
