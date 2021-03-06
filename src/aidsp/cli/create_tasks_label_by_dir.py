'''
@Author: your name
@Date: 2019-11-26 10:09:12
@LastEditTime: 2019-11-26 10:45:54
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /AIdatasets_pr2duction_processing/scripts/0.generally/cvat_scripts/create_tasks.py
'''
import os
import shutil
import sys

'''

'''

# pici_num
project_num = '20200305'

img_dir = os.path.join('../images', project_num)


cli_path = 'cli.py'

# copy imgs adjust task
img_task_dir = os.path.join('../images', project_num+'_tasks')  

if not os.path.exists(img_task_dir):
    os.mkdir(img_task_dir)

# label list
# labels_list = ['hand','error']
# labels_list = ['left_eyebrow_134', 'right_eyebrow_134', 'left_eye_134', 'right_eye_134', 'mouth_134','error']
labels_list = ['error', 'label']
# labels_list = ['human','error']
# labels_list = ['mu_zhi', 'shi_zhi', 'zhong_zhi', 'wu_ming_zhi', 'xiao_zhi', 'error']
# labels_list = ['cheek','left_eyebrow','right_eyebrow','left_eye','right_eye','nose','mouth','error']
# labels_list = ['left_eyeball','right_eyeball','error']
# labels_list = ['hat','hair','face','neck','body','background','error']

def create_tasks_files():
    # sum of all pics
    img_sum = len(os.listdir(img_dir))

    # each task amount
    each_tasks_sum = 3150

    # task amount
    tasks_num = img_sum // each_tasks_sum

    pic_count = 0
    dir_count = 0
    for img in os.listdir(img_dir):
        if pic_count % each_tasks_sum == 0:
            img_task_path = os.path.join(img_task_dir, project_num+'_tasks_%04d'%dir_count)
            if not os.path.exists(img_task_path):
                os.mkdir(img_task_path)
            dir_count += 1
        ori_img_path = os.path.join(img_dir, img)
        to_img_path = os.path.join(img_task_path, img)
        shutil.copy(ori_img_path, to_img_path)
        pic_count += 1


def create_tasks(auth):


    # generate label.json
    data_labels = []
    for label in labels_list:
        labels_dict = {}
        labels_dict['attributes'] = []
        labels_dict['name'] = label
        data_labels.append(labels_dict)
    print(data_labels)
    #with open('labels.json', 'w', encoding = 'utf-8') as f:
    #    f.write(str(data_labels))

    #la = "\'[{\"name\": \"hand\", \"attributes\": []}]\'"
    labels = ''
    for label in labels_list:
        labels += '{"name":"%s", "attributes": []},'%label
    labels_str = '[%s]'%labels[:-1]

    '''create_tasks'''

    dirs = os.listdir(img_task_dir)
    dirs.sort()
    for Dir in dirs:
        task_name = Dir    
        labels_s = labels_str.replace('label', Dir)
        k = "python3 {} --auth {} --server-host localhost --server-port 8084 create '{}' --labels '{}' local {}/{}/*".format(cli_path, auth, task_name, labels_s, img_task_dir, task_name)

        os.system(k)


if __name__ == '__main__':
    auth = input("auth:")
    # create_tasks_files()
    create_tasks(auth)


