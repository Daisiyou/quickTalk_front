#数据库设计(quickTalk)

###user
```
id 					- primary key
name 				- string
password			- string(md5)
cellphone			- string
signature			- string
status				- number(1 normal, 2 forbid)
type				- number(1 user, 2 admin, 3 super admin)

```

###relationship(one-one)
```
id					- primary key
idOne				- string
idAnother			- string
status				- number(1 wait confirm, 2 established)

```

###relationship(group-one)
```
id					- primary key
groupId			- string
userId				- string
status				- number(1 wait confirm, 2 established)

```


###message(one-one)
```
id					- primary key
fromId				- string
toId				- string
message			- string
type				- string

```

###message(group)]
```
id					- primary key
groupId			- string
fromId				- string
message			- string
type				- number

```

###groupInfo
```
id					- primary key
groupId			- string
name				- string
brief				- string
creatorId			- string

```