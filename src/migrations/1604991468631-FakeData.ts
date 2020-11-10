import { MigrationInterface, QueryRunner } from "typeorm";

export class FakeData1604991468631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into post (title, text, "creatorId", "createdAt") values ('Ce que mes yeux ont vu', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 8, '2020-06-24 07:38:50');
    insert into post (title, text, "creatorId", "createdAt") values ('Diamond Men', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, '2019-11-24 20:06:13');
    insert into post (title, text, "creatorId", "createdAt") values ('Baboona', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 8, '2020-01-09 07:39:38');
    insert into post (title, text, "creatorId", "createdAt") values ('President''s Man: A Line in the Sand, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 8, '2020-10-02 16:13:36');
    insert into post (title, text, "creatorId", "createdAt") values ('Jack''s Back ', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 8, '2020-06-19 14:11:16');
    insert into post (title, text, "creatorId", "createdAt") values ('Gods and Monsters', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 8, '2020-05-21 14:03:00');
    insert into post (title, text, "creatorId", "createdAt") values ('Middle of Nowhere', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 8, '2019-12-12 03:14:12');
    insert into post (title, text, "creatorId", "createdAt") values ('Retreat', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 8, '2020-03-31 13:28:45');
    insert into post (title, text, "creatorId", "createdAt") values ('Outlaw Blues', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 8, '2019-12-09 13:02:57');
    insert into post (title, text, "creatorId", "createdAt") values ('Mark of the Vampire', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 8, '2020-05-22 14:16:38');
    insert into post (title, text, "creatorId", "createdAt") values ('All Fall Down', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 8, '2020-10-24 18:05:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Book of Fate, The (Kohtalon kirja)', 'Fusce consequat. Nulla nisl. Nunc nisl.', 8, '2020-02-12 00:11:32');
    insert into post (title, text, "creatorId", "createdAt") values ('Jack Frost 2: Revenge of the Mutant Killer Snowman', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, '2020-11-09 13:21:14');
    insert into post (title, text, "creatorId", "createdAt") values ('Possessed', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 8, '2020-02-06 08:02:00');
    insert into post (title, text, "creatorId", "createdAt") values ('Marathon Family, The (Maratonci Trce Pocasni Krug)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 8, '2020-06-12 21:24:57');
    insert into post (title, text, "creatorId", "createdAt") values ('Stranger in the House', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 8, '2020-07-10 14:36:25');
    insert into post (title, text, "creatorId", "createdAt") values ('Lumberjacking (Nuoruuteni savotat)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, '2020-02-20 10:43:01');
    insert into post (title, text, "creatorId", "createdAt") values ('Searching for Debra Winger', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, '2020-10-24 15:47:09');
    insert into post (title, text, "creatorId", "createdAt") values ('Sitter, The', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 8, '2020-05-04 00:13:58');
    insert into post (title, text, "creatorId", "createdAt") values ('National Treasure', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 8, '2020-04-12 01:30:24');
    insert into post (title, text, "creatorId", "createdAt") values ('Crow: Salvation, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 8, '2020-08-09 14:55:48');
    insert into post (title, text, "creatorId", "createdAt") values ('Time Bandits', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 8, '2019-12-18 15:16:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Weeds', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 8, '2019-12-01 03:33:38');
    insert into post (title, text, "creatorId", "createdAt") values ('20 Seconds of Joy', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 8, '2019-11-11 05:32:41');
    insert into post (title, text, "creatorId", "createdAt") values ('Nightmare Alley', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 8, '2020-01-01 20:43:10');
    insert into post (title, text, "creatorId", "createdAt") values ('Kiss Me Goodbye', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 8, '2020-01-13 20:45:56');
    insert into post (title, text, "creatorId", "createdAt") values ('Gigante', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 8, '2019-12-27 03:06:20');
    insert into post (title, text, "creatorId", "createdAt") values ('Lovers of the Arctic Circle, The (Los Amantes del Círculo Polar)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, '2020-07-01 00:59:40');
    insert into post (title, text, "creatorId", "createdAt") values ('Ann Carver''s Profession', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 8, '2020-06-04 20:42:30');
    insert into post (title, text, "creatorId", "createdAt") values ('De-Lovely', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, '2020-08-11 11:54:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Narco Cultura', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 8, '2020-09-15 10:32:55');
    insert into post (title, text, "creatorId", "createdAt") values ('Year One', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 8, '2020-04-10 04:24:12');
    insert into post (title, text, "creatorId", "createdAt") values ('Romance in a Minor Key (Romanze in Moll)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 8, '2020-02-12 09:42:51');
    insert into post (title, text, "creatorId", "createdAt") values ('Drama/Mex', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, '2020-07-08 23:58:33');
    insert into post (title, text, "creatorId", "createdAt") values ('Schwestern', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, '2020-11-05 01:14:33');
    insert into post (title, text, "creatorId", "createdAt") values ('Osama', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, '2020-04-04 20:28:30');
    insert into post (title, text, "creatorId", "createdAt") values ('Last Witness, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8, '2019-11-30 22:49:17');
    insert into post (title, text, "creatorId", "createdAt") values ('Werewolf, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, '2020-02-02 06:29:14');
    insert into post (title, text, "creatorId", "createdAt") values ('Cazuza - O Tempo Não Pára', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 8, '2020-09-20 08:44:02');
    insert into post (title, text, "creatorId", "createdAt") values ('Brazil: In the Shadow of the Stadiums', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 8, '2020-04-24 12:05:40');
    insert into post (title, text, "creatorId", "createdAt") values ('How I Killed My Father (a.k.a. My Father and I) (Comment j''ai tué mon Père)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 8, '2020-09-25 22:43:25');
    insert into post (title, text, "creatorId", "createdAt") values ('Signal, The (Señal, La)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 8, '2020-01-18 21:14:42');
    insert into post (title, text, "creatorId", "createdAt") values ('Happy-Go-Lucky', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 8, '2020-04-22 15:56:57');
    insert into post (title, text, "creatorId", "createdAt") values ('Montenegro', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 8, '2020-06-24 18:05:37');
    insert into post (title, text, "creatorId", "createdAt") values ('Escape from Fort Bravo', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 8, '2019-12-25 09:17:37');
    insert into post (title, text, "creatorId", "createdAt") values ('Armour of God (Long xiong hu di)', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 8, '2020-07-18 19:34:55');
    insert into post (title, text, "creatorId", "createdAt") values ('Hurricane, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 8, '2020-09-13 19:09:27');
    insert into post (title, text, "creatorId", "createdAt") values ('White Bird in a Blizzard', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, '2020-08-08 20:16:59');
    insert into post (title, text, "creatorId", "createdAt") values ('Fountainhead, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, '2020-09-02 04:37:48');
    insert into post (title, text, "creatorId", "createdAt") values ('Superweib, Das', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 8, '2020-07-06 23:07:01');
    insert into post (title, text, "creatorId", "createdAt") values ('K-11', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8, '2020-03-28 23:40:44');
    insert into post (title, text, "creatorId", "createdAt") values ('The World Forgotten', 'Fusce consequat. Nulla nisl. Nunc nisl.', 8, '2019-11-27 10:18:35');
    insert into post (title, text, "creatorId", "createdAt") values ('Picture Perfect', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 8, '2020-11-05 13:57:05');
    insert into post (title, text, "creatorId", "createdAt") values ('Sparkle', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 8, '2020-03-05 14:06:57');
    insert into post (title, text, "creatorId", "createdAt") values ('Style Wars', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 8, '2020-05-15 03:44:58');
    insert into post (title, text, "creatorId", "createdAt") values ('Khumba', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, '2020-03-16 12:52:09');
    insert into post (title, text, "creatorId", "createdAt") values ('Fetishes', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, '2020-07-26 18:26:35');
    insert into post (title, text, "creatorId", "createdAt") values ('Duchess of Langeais, The (a.k.a. Don''t Touch the Axe) (Ne touchez pas la hache)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 8, '2020-11-09 03:50:49');
    insert into post (title, text, "creatorId", "createdAt") values ('Jump Tomorrow', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, '2020-08-13 12:52:08');
    insert into post (title, text, "creatorId", "createdAt") values ('Dragon (Wu Xia)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, '2020-09-09 12:54:08');
    insert into post (title, text, "creatorId", "createdAt") values ('Tomorrow Night', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 8, '2020-01-03 16:51:40');
    insert into post (title, text, "creatorId", "createdAt") values ('One Man Against the Organization', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, '2020-08-13 13:41:45');
    insert into post (title, text, "creatorId", "createdAt") values ('Neon Bible, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 8, '2020-02-17 09:18:50');
    insert into post (title, text, "creatorId", "createdAt") values ('Our Beloved Month of August (Aquele Querido Mês de Agosto)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8, '2020-02-02 02:20:03');
    insert into post (title, text, "creatorId", "createdAt") values ('Saw III', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 8, '2020-01-02 21:12:05');
    insert into post (title, text, "creatorId", "createdAt") values ('Odd Man Out', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 8, '2020-03-27 06:07:24');
    insert into post (title, text, "creatorId", "createdAt") values ('Good Hair', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 8, '2020-04-26 15:17:28');
    insert into post (title, text, "creatorId", "createdAt") values ('Viy', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, '2020-10-31 14:08:01');
    insert into post (title, text, "creatorId", "createdAt") values ('Slam', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, '2020-09-13 08:16:41');
    insert into post (title, text, "creatorId", "createdAt") values ('Planet of Snail', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 8, '2020-02-04 05:39:02');
    insert into post (title, text, "creatorId", "createdAt") values ('Key Largo', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, '2020-04-04 11:51:17');
    insert into post (title, text, "creatorId", "createdAt") values ('Crazy Stranger, The (Gadjo Dilo)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, '2020-07-14 04:34:24');
    insert into post (title, text, "creatorId", "createdAt") values ('10th Kingdom, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, '2020-06-30 15:02:41');
    insert into post (title, text, "creatorId", "createdAt") values ('Appointment in Tokyo', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 8, '2020-10-26 14:18:10');
    insert into post (title, text, "creatorId", "createdAt") values ('Deal of the Century', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 8, '2020-08-04 12:11:55');
    insert into post (title, text, "creatorId", "createdAt") values ('Nancy Goes to Rio', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 8, '2019-12-09 23:28:01');
    insert into post (title, text, "creatorId", "createdAt") values ('Bag of Bones', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 8, '2019-11-12 00:12:06');
    insert into post (title, text, "creatorId", "createdAt") values ('Common Thread, A (a.k.a. Sequins) (Brodeuses)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 8, '2020-05-16 17:14:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Reparando', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 8, '2020-02-17 01:23:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Catwalk', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 8, '2020-09-10 17:00:40');
    insert into post (title, text, "creatorId", "createdAt") values ('New Age, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 8, '2020-04-05 22:51:08');
    insert into post (title, text, "creatorId", "createdAt") values ('Mafioso', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 8, '2020-10-28 17:37:50');
    insert into post (title, text, "creatorId", "createdAt") values ('Please Give', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, '2020-05-14 16:16:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Speaking Parts', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 8, '2020-01-18 02:47:32');
    insert into post (title, text, "creatorId", "createdAt") values ('Twin Dragons (Shuang long hui)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 8, '2020-02-07 15:34:29');
    insert into post (title, text, "creatorId", "createdAt") values ('Cheri', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, '2020-09-05 20:46:53');
    insert into post (title, text, "creatorId", "createdAt") values ('Love and Anarchy (Film d''amore e d''anarchia, ovvero ''stamattina alle 10 in via dei Fiori nella nota casa di tolleranza...'')', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8, '2019-11-21 13:00:51');
    insert into post (title, text, "creatorId", "createdAt") values ('Two Jakes, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 8, '2020-01-23 23:09:58');
    insert into post (title, text, "creatorId", "createdAt") values ('Kings of Pastry (Les rois de la pâtisserie)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, '2020-05-13 23:12:21');
    insert into post (title, text, "creatorId", "createdAt") values ('Boy in the Striped Pajamas, The (Boy in the Striped Pyjamas, The)', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 8, '2019-12-05 03:26:35');
    insert into post (title, text, "creatorId", "createdAt") values ('Get Him to the Greek', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 8, '2020-03-20 05:23:08');
    insert into post (title, text, "creatorId", "createdAt") values ('3 Worlds of Gulliver, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 8, '2020-03-21 05:35:24');
    insert into post (title, text, "creatorId", "createdAt") values ('Sylvia and the Ghost', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, '2020-05-12 14:29:59');
    insert into post (title, text, "creatorId", "createdAt") values ('Bride Wore Black, The (La mariée était en noir)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 8, '2020-03-09 17:00:12');
    insert into post (title, text, "creatorId", "createdAt") values ('Above and Beyond', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 8, '2020-02-27 05:18:18');
    insert into post (title, text, "creatorId", "createdAt") values ('Be Cool', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 8, '2020-08-11 18:44:52');
    insert into post (title, text, "creatorId", "createdAt") values ('Colin Quinn: Long Story Short', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 8, '2019-12-15 14:49:07');
    insert into post (title, text, "creatorId", "createdAt") values ('Pigskin Parade', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 8, '2020-08-14 10:03:14');
    insert into post (title, text, "creatorId", "createdAt") values ('Phantom', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 8, '2020-07-10 11:28:40');
    insert into post (title, text, "creatorId", "createdAt") values ('Poll Diaries, The (Poll)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 8, '2020-03-04 16:54:01');`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
