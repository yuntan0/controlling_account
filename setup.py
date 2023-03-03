from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in controlling_account/__init__.py
from controlling_account import __version__ as version

setup(
	name="controlling_account",
	version=version,
	description="Controlling Accounting System",
	author="John",
	author_email="yuntan0@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
