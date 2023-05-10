from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in dealsthatclick/__init__.py
from dealsthatclick import __version__ as version

setup(
	name="dealsthatclick",
	version=version,
	description="s",
	author="a",
	author_email="s",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
