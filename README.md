# P5.js-games
# Realtime Sign Language Detection

A model which detects and interprets sign language in real time which reduces the communications barrier which exists between the deaf and hearing communities.

## Installation
1. Python using [Anaconda](https://repo.anaconda.com/archive)
2. [Visual C++ Build Tools](https://visualstudio.microsoft.com/vs/) 2022 version
3. [CUDA](https://developer.nvidia.com/cuda-10) and [CUDNN](https://developer.nvidia.com/rdp/cudn) for Nvidia
4. [Protoc](https://github.com/protocolbuffers/pr)
5. [Tensorflow Object Detection API](https://github.com/tensorflow/models)


Note : Make sure to check desktop development with C++ while installing

## Steps to install tensorflow model
1. Install tensorflow model
[Tensorflow Models GitHub](https://github.com/tensorflow/models) 

2. Open ``` cmd ```  --> goto ``` models\research ``` folder 
and 

   enter the following command
   ```bash
   protoc object_detection/protos/*.proto --python_out =. 
   ```
3. Copy the ``` setup.py folder``` from ``` object_detection/packages/tf2 folder ``` into the ``` research folder ```
4. To install all the dependencies needed for the object detection 
   library, run
   ```bash
   python -m pip install .
   ```
## Train the model

We trained the model for 10000 steps
```bash
Python Tensorflow/models/research/object_detection/model_main_tv2.py --model_dir = Tensorflow/workspace/models/my_ssd_ mobnet -- 
pipeline_config_path = Tensorflow/workspace/models/my_ssd_mobnet/pipeline.config --num_train_steps = 10000 
```
## Contribution
Jihyeok Choi

Hyelim Yang

Pragati Singh

Rohit Chandra



