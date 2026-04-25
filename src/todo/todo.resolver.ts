import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return [];
  }

  findOne(id: number) {
    return;
  }

  createTodo() {
    return;
  }

  updateTodo() {
    return;
  }

  deleteTodo() {
    return;
  }
}
